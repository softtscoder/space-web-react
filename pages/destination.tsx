import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import {
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
  pageTransitionVariants,
} from "utils";
import { motion } from "framer-motion";
import React from "react";
import { NextPageWithLayout, Planet } from "models";
import { MainLayout } from "components/layout";
import { GetStaticProps } from "next";
import { PlanetImageProps, PlanetInfoProps } from "components/Destination";

import static_data from "json/db.json";
import { retrieve } from "utils/firebase";
import { NextSeo, BlogJsonLd } from "next-seo";
import { DefaultBlogJsonLd } from "utils/NextSeo";
import dynamic from "next/dynamic";
import { contextCreator } from "utils/context";

// console.log(h5);
export interface DestinationProps {
  planet: Planet[];
}

const DynamicPlanetImage = dynamic<PlanetImageProps>(
  () => import("components/Destination").then((mod) => mod.PlanetImage)
  // { ssr: false }
  // No need if the page not using SSR. If using, use-cases are:
  // - if there are library work only in client side
  // - not need this component on the server
);

const DynamicPlanetInfo = dynamic<PlanetInfoProps>(() =>
  import("components/Destination").then((mod) => mod.PlanetInfo)
);

export const [usePlanet, PlanetProvider] = contextCreator<Planet[]>();

const Destination: NextPageWithLayout<DestinationProps> = ({ planet }) => {

  const [TabIndex, setTabIndex] = React.useState(0);
  const [isMobileTablet] = useMediaQuery("(max-width: 1440px)");

  return (
    <>
      <NextSeo
        title="Destination Page"
        description="Moon. See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        openGraph={{
          url: "https://space-web-tannguyencse19.vercel.app/destination",
          title: "Space Web Destination",
          description: "Moon. See our planet as you’ve never seen it before.",
          images: [
            {
              url: "https://space-web-tannguyencse19.vercel.app/assets/SEO/destination.jpg",
              width: 1024,
              height: 540,
              alt: "Space Web Destination image",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <BlogJsonLd
        url="https://space-web-tannguyencse19.vercel.app/destination"
        title="Space Web Destination"
        description="Moon. See our planet as you’ve never seen it before."
        {...DefaultBlogJsonLd}
      />

      <Box
        className="wrapper"
        backgroundImage={{
          mobile: "/assets/destination/background-destination-mobile.jpg",
          tablet: "/assets/destination/background-destination-tablet.jpg",
          desktop: "/assets/destination/background-destination-desktop.jpg",
        }}
      >
        <Grid
          autoFlow={{ mobile: "row", desktop: "column" }}
          justifyContent={{ mobile: "unset", desktop: "space-around" }}
          alignItems={{ mobile: "unset", desktop: "center" }}
          justifyItems={{ mobile: "center", desktop: "unset" }}
          // gap={{ mobile: "20", desktop: "0" }}
          as={motion.div}
          variants={pageTransitionVariants(isMobileTablet)}
          initial="hidden" //BUG: result in viewport loss height/width due to transform-translate
          animate="visible"
          exit="exit"
        >
          <PlanetProvider value={planet}>
            <DynamicPlanetImage tabIndex={TabIndex} />

            <DynamicPlanetInfo TabIndex={TabIndex} setTabIndex={setTabIndex} />
          </PlanetProvider>
        </Grid>
      </Box>
    </>
  );
};

Destination.Layout = MainLayout;

export const getStaticProps: GetStaticProps<DestinationProps> = async (
  context
) => {
  const planet = await retrieve<Planet[]>("/destination");

  return {
    props: {
      planet: planet ? planet : static_data.destination,
    },
  };
};

export default Destination;
