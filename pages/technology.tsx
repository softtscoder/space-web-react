import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import {
  _afterUnderlineStyle,
  _sxHoverAfterUnderlineStyle,
  pageTransitionVariants,
} from "utils";
import { motion } from "framer-motion";
import React from "react";
import { NextPageWithLayout, Tech } from "models";
import { MainLayout } from "components/layout";
import { GetStaticProps } from "next";
import { TechImageProps, TechInfoProps } from "components/Technology";
import static_data from "json/db.json";
import { retrieve } from "utils/firebase";
import { NextSeo, BlogJsonLd } from "next-seo";
import { DefaultBlogJsonLd } from "utils/NextSeo";
import dynamic from "next/dynamic";
import { contextCreator } from "utils/context";

export interface TechProps {
  tech: Tech[];
}

const DynamicTechImage = dynamic<TechImageProps>(
  () => import("components/Technology").then((mod) => mod.TechImage)
  // { ssr: false }
);

const DynamicTechInfo = dynamic<TechInfoProps>(() =>
  import("components/Technology").then((mod) => mod.TechInfo)
);

export const [useTech, TechProvider] = contextCreator<Tech[]>();

const Tech: NextPageWithLayout<TechProps> = ({ tech }) => {
  const [TabIndex, setTabIndex] = React.useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isMobileTablet] = useMediaQuery("(max-width: 1440px)");

  return (
    <>
      <NextSeo
        title="Tech Page"
        description="Moon. See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        openGraph={{
          url: "https://space-web-tannguyencse19.vercel.app/destination", //TODO: Cap hinh trong Figma
          title: "Space Web Tech",
          description: "Moon. See our planet as you’ve never seen it before.",
          images: [
            {
              url: "https://space-web-tannguyencse19.vercel.app/assets/SEO/destination.jpg", //TODO
              width: 1024,
              height: 540,
              alt: "Space Web Tech image",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <BlogJsonLd
        url="https://space-web-tannguyencse19.vercel.app/destination"
        title="Space Web Tech"
        description="Moon. See our planet as you’ve never seen it before."
        {...DefaultBlogJsonLd}
      />

      <Box
        //   className="wrapper"
        h="100%" // do ko dung wrapper
        backgroundImage={{
          mobile: "/assets/technology/background-technology-mobile.jpg",
          tablet: "/assets/technology/background-technology-tablet.jpg",
          desktop: "/assets/technology/background-technology-desktop.jpg",
        }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid
          autoFlow={{ mobile: "row", desktop: "column" }}
          justifyContent={{ mobile: "unset", desktop: "space-between" }}
          alignItems={{ mobile: "unset", desktop: "center" }}
          justifyItems={{ mobile: "center", desktop: "unset" }}
          gap={{ mobile: "20", desktop: "0" }}
          as={motion.div}
          variants={pageTransitionVariants(isMobileTablet)}
          initial="hidden" //BUG: transform-translate result in viewport loss height/width
          animate="visible"
          exit="exit"
        >
          <TechProvider value={tech}>
            {/* {isMobile ? (
              <>
                <DynamicTechImage tabIndex={TabIndex} key="tech-image-mobile" />

                <DynamicTechInfo
                  TabIndex={TabIndex}
                  setTabIndex={setTabIndex}
                  key="tech-info-mobile"
                />
              </>
            ) : (
              <>
                <DynamicTechInfo
                  TabIndex={TabIndex}
                  setTabIndex={setTabIndex}
                  key="tech-info"
                />

                <DynamicTechImage tabIndex={TabIndex} key="tech-image" />
              </>
            )} */}
            <DynamicTechInfo TabIndex={TabIndex} setTabIndex={setTabIndex} />

            <DynamicTechImage tabIndex={TabIndex} />
          </TechProvider>
        </Grid>
      </Box>
    </>
  );
};

Tech.Layout = MainLayout;

export const getStaticProps: GetStaticProps<TechProps> = async (context) => {
  const tech = await retrieve<Tech[]>("/technology");

  return {
    props: {
      tech: tech ? tech : static_data.technology,
    },
  };
};

export default Tech;
