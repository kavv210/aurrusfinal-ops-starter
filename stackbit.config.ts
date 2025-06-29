siteMap: ({ documents, models }): SiteMapEntry[] => {
    // Collect the names of every model that represents a “page”
    const pageModels = models
        .filter((model) => model.type === 'page')
        .map((model) => model.name);

    return documents
        // Keep only the docs whose model is one of those page models
        .filter((doc) => pageModels.includes(doc.modelName))
        .map((doc) => {
            // Each page is expected to have a slug field
            const slugField = doc.fields.slug as DocumentStringLikeFieldNonLocalized;
            const rawSlug = slugField?.value;
            if (!rawSlug) return null;                          // skip if slug missing

            // Trim any leading slashes so "/services" → "services"
            const trimmed = rawSlug.replace(/^\/+/, '');

            // Root-level pages (“/”) should map to just "/"
            const urlPath = trimmed ? `/${trimmed}` : '/';

            return { urlPath, document: doc };
        })
        .filter(Boolean); // removes any null entries from missing slugs
}
