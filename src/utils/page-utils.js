function cssClassesFromUrlPath(urlPath) {
    const parts = urlPath
        .replace(/^\/|\/$/g, '') // remove leading/trailing slashes
        .split('/')
        .filter(Boolean); // remove empty strings

    let css = 'page';
    return parts.map((part) => {
        css += `-${part}`;
        return css;
    });
}

function getPageUrl(page) {
    if (!page || !page.slug) return null;

    // ✅ Always return the slug as-is, no /blog prefix
    return page.slug.startsWith('/') ? page.slug : `/${page.slug}`;
}

function setEnvironmentVariables() {
    return {
        ...(process?.env?.URL && { URL: process.env.URL }),
    };
}

module.exports = {
    cssClassesFromUrlPath,
    getPageUrl,
    setEnvironmentVariables
};
