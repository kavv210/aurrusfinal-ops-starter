import React from 'react';
import Head from 'next/head';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import {
  seoGenerateTitle,
  seoGenerateMetaTags,
  seoGenerateMetaDescription
} from '../utils/seo-utils';

function Page(props) {
  const { page, site } = props;

  // ✅ Guard against missing or malformed page data
  if (!page || !page.__metadata || !page.__metadata.modelName) {
    throw new Error(
      `Invalid or missing page metadata for path '${props?.path || '/'}'`
    );
  }

  const { modelName } = page.__metadata;
  const PageLayout = getComponent(modelName);

  if (!PageLayout) {
    throw new Error(
      `No page layout matching the page model: ${modelName}`
    );
  }

  const title = seoGenerateTitle(page, site);
  const metaTags = seoGenerateMetaTags(page, site);
  const metaDescription = seoGenerateMetaDescription(page, site);

  return (
    <>
      <Head>
        <title>{title}</title>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        {metaTags.map((metaTag) =>
          metaTag.format === 'property' ? (
            <meta
              key={metaTag.property}
              property={metaTag.property}
              content={metaTag.content}
            />
          ) : (
            <meta
              key={metaTag.property}
              name={metaTag.property}
              content={metaTag.content}
            />
          )
        )}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        {site.favicon && <link rel="icon" href={site.favicon} />}
      </Head>

      {/* Render the actual page layout */}
      <PageLayout page={page} site={site} />
    </>
  );
}

export function getStaticPaths() {
  const data = allContent();
  const paths = resolveStaticPaths(data);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = allContent();
  const urlPath = '/' + (params.slug || []).join('/');
  const props = await resolveStaticProps(urlPath, data);
  return { props };
}

export default Page;
