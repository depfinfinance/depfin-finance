import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE_URL } from "../constants";
import Fab from "../utils/Fab";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <meta
            property="og:image"
            content="https://depfin.com.au/static/media/logo.png"
          />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Depfin Finance" />
        </Head>

        <body>
          <Main />
          <Fab />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;