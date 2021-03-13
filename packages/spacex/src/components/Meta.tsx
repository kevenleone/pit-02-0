import Head from 'next/head';
import React from 'react';

type MetaProps = {
  description?: string;
  image?: string;
  title?: string;
  url?: string;
};

const Meta: React.FC<MetaProps> = ({ description, image, title, url }) => {
  return (
    <Head>
      <meta property="og:type" content="website" />

      {title && (
        <>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
        </>
      )}

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}

      {url && (
        <>
          <meta property="twitter:url" content={url} />
          <meta property="og:url" content={url} />
        </>
      )}

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={image} />
        </>
      )}
    </Head>
  );
};

export default Meta;
