import Head from "next/head";

const DOMAIN = "https://bookbudy.com";

export default function Meta({
  title = "BookBudy - Discover your next book",
  description = "BookBudy is a platform for readers to make informed decisions on book purchases from book lists, book reviews, authors, and influencers who love to read.",
  image = `${DOMAIN}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@book_budy" />
      <meta name="twitter:creator" content="@nicmarson" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Paytone+One&display=optional"></link>
    </Head>
  );
}
