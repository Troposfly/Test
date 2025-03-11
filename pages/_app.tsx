// pages/_app.tsx
import Layout from '../src/app/layout';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

