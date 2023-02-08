import Head from "next/head";
import { siteMeta } from "libs/constants";
import { useRouter } from "next/router";

import siteImg from "public/aaamoyst.jpg";

export default function Meta(props) {
  const { pageTitle, pageDesc } = props;
  const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
    siteMeta;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  const img = siteImg.src;
  const imgW = siteImg.width;
  const imgH = siteImg.height;
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
