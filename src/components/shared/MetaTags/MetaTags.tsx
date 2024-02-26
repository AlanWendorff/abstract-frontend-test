import HeadNext from 'next/head';

const MetaTags = () => (
  <HeadNext>
    <title>Pokemon Challenge</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta property='og:type' content='website' />
    <meta name='theme-color' content='#ffff64' />
    <meta property='og:title' content='Abstract frontend test' />
    <meta name='twitter:title' content='Abstract frontend test' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='description' content='Abstract frontend challenge.' />
    <meta property='og:description' content='Abstract frontend challenge.' />
    <meta name='twitter:description' content='Abstract frontend challenge.' />
  </HeadNext>
);

export default MetaTags;
