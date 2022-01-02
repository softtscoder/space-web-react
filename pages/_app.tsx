import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "utils";
import { AppPropsWithLayout } from "models";
import { EmptyLayout } from "components/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout =
    Component.Layout ?? EmptyLayout; /* Khong can dynamic import vi no simple */

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* Between here is Layout `children` prop */}
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
