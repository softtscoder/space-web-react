import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "utils";
import { AppPropsWithLayout } from "models";
import { EmptyLayout } from "components/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// Dat trong nay chu khong trong _document.tsx duoc
import { DefaultSeo } from "next-seo";
import { DefaultSeoConfig } from "utils/NextSeo";

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
          <DefaultSeo {...DefaultSeoConfig} />

          {/* Important: Assign key to each component (useRouter)
            for <AnimatePresence /> to detect route changing */}
          <Component {...pageProps} key={pathname} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
