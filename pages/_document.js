import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TY7544TP54"
          />
          <link rel="icon" href="/favicon.svg" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.svg"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
