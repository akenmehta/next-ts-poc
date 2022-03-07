import { React } from '@shared/vendor';
import { AppProps } from '@shared/vendorTypes';
import { Grid } from '@shared/components/container';
import { Header, Footer } from '@shared/components/layout';
import { AppStyles } from '@styles/appStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Grid>
        <AppStyles />
        <Component {...pageProps} />
      </Grid>
      <Footer />
    </>
  );
}

export default MyApp;
