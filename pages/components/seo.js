import Head from "next/head";

export default function Seo({ title }) {
  const greeting = `Next Movie app | ${title}`;
  return (
    <Head>
      <title>{greeting}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
