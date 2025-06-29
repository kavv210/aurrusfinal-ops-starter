import {
  getRootPagePath,
  resolveReferences,
  mapDeepAsync
} from './data-utils';

/**
 * Resolves all static props for a given page path.
 * Tailored for a non-blog site with service sections.
 */

export function resolveStaticProps(urlPath, data) {
  // 1. Extract root page path, e.g., "/services/page/2" → "/services"
  const rootUrlPath = getRootPagePath(urlPath);

  // 2. Get the matching page data
  const { __metadata, ...rest } = data.pages.find(
    (page) => page.__metadata.urlPath === rootUrlPath
  );

  // 3. Build props with updated urlPath
  const props = {
    page: {
      __metadata: {
        ...__metadata,
        urlPath
      },
      ...rest
    },
    ...data.props
  };

  // 4. Resolve dynamic references inside content
  return mapDeepAsync(
    props,
    async (value, keyPath, stack) => {
      const objectType = value?.__metadata?.modelName;
      if (objectType && StaticPropsResolvers[objectType]) {
        return StaticPropsResolvers[objectType](value, data, { keyPath, stack });
      }
      return value;
    },
    { postOrder: true }
  );
}

// ───────────────────────────────────────────────
// Page Section Resolvers for non-blog layout
// ───────────────────────────────────────────────

const StaticPropsResolvers = {
  // Resolve authors/categories for old direct blog post links (optional)
  PostLayout: (props, data, debugContext) =>
    resolveReferences(props, ['author', 'category'], data.objects, debugContext),

  // Resolve featured posts data, if reused in hero or legacy sections
  FeaturedPostsSection: (props, data, debugContext) =>
    resolveReferences(props, ['posts.author', 'posts.category'], data.objects, debugContext),

  // Resolve featured people (e.g., testimonials or team)
  FeaturedPeopleSection: (props, data, debugContext) =>
    resolveReferences(props, ['people'], data.objects, debugContext)
};
