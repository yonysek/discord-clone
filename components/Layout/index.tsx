import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Discord clone app</title>
        <meta
          name="description"
          content="Clone of the official Discord of app using Next.js, Tailwind CSS and Typescript"
        />
      </Head>
      <main>
        <body className="overflow-hidden bg-fixed">{children}</body>
      </main>
    </>
  );
}
