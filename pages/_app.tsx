import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Grid } from '@shared/components/container';
import { AppStyles } from "@styles/appStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grid>
      <AppStyles />
      <Component {...pageProps} />
    </Grid>
  );
}

export default MyApp
