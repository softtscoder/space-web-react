import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "utils";
import { AppPropsWithLayout } from "models";
import { EmptyLayout } from "components/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { pathname } = useRouter();

  const Layout =
    Component.Layout ?? EmptyLayout; /* Khong can dynamic import vi no simple */

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* Between here is Layout `children` prop */}

        {/* Put AnimatePresence here for its to detect route changing */}
        <AnimatePresence
          exitBeforeEnter
          // Verify it work or not using onExitComplete hook
          // onExitComplete={() => window.scroll(150, 150)}
        >
          {/* Important: Assign key to each component (useRouter)
            for <AnimatePresence /> to detect route changing */}
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
