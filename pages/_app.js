import Header from '../components/Header/Header';
import Head from 'next/head';
import '../styles/globals.scss';
import BreadCrumbs from '../components/BreadCrumb/BreadCrumbs';

const Layout = ({children}) => {
  const { props } = children;
  const breadCrumbs = props.breadCrumbs || [];
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" conetent="Please Search something that you want to buy with US in Mercado Libre "/>
      </Head>
      <Header  initialState={''} />
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      {children}
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>);
}

export default MyApp
