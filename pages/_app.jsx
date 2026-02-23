import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MasterForge — AI Mastering Studio</title>
        <meta name="description" content="Professional AI audio mastering in your browser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎛️</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style global jsx>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #080810; font-family: 'Syne', sans-serif; }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
