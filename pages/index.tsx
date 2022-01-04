// import styles from '../styles/Home.module.css'
import { Box, Center, Grid, Text, useMediaQuery } from "@chakra-ui/react";
import {
  h1,
  h2,
  h4,
  h5,
  pageTransitionVariants,
  exploreAuraVariants,
} from "utils";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { NextPageWithLayout } from "models";
import { MainLayout } from "components/layout";
import { NextSeo, BlogJsonLd } from "next-seo";
import { DefaultBlogJsonLd } from "utils/NextSeo";
// console.log(h5);

export interface HomeProps {}

const Home: NextPageWithLayout<HomeProps> = ({}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <NextSeo
        title="Home Page"
        description="So, you want to travel to Space. Let's face it. If you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it."
        openGraph={{
          url: "https://space-web-tannguyencse19.vercel.app/",
          title: "Space Web Homepage",
          description: "So, you want to travel to Space. Let's face it.",
          images: [
            {
              url: "https://space-web-tannguyencse19.vercel.app/assets/SEO/home.jpg",
              width: 1024,
              height: 400,
              alt: "Space Web Homepage image",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <BlogJsonLd
        url="https://space-web-tannguyencse19.vercel.app/"
        title="Space Web Homepage"
        description="So, you want to travel to Space. Let's face it."
        {...DefaultBlogJsonLd}
      />
      <Box
        className="wrapper"
        backgroundImage={{
          mobile: "/assets/home/background-home-mobile.jpg",
          tablet: "/assets/home/background-home-tablet.jpg",
          desktop: "/assets/home/background-home-desktop.jpg",
        }}
        backgroundRepeat="no-repeat"
        backgroundSize="cover" // desktop: for big screen, khi debug nho chon responsive de xem cho dung
      >
        <Grid
          autoFlow={{ mobile: "row", desktop: "column" }}
          justifyContent={{ mobile: "unset", desktop: "space-around" }}
          alignItems={{ mobile: "unset", desktop: "end" }}
          justifyItems={{ mobile: "center", desktop: "unset" }}
          gap={{ mobile: "20", desktop: "0" }}
          as={motion.div}
          variants={pageTransitionVariants(isMobile)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Box textAlign={{ mobile: "center", desktop: "start" }}>
            <Box>
              <Text
                as="h5"
                {...h5.return()}
                fontSize={{
                  mobile: "16px",
                  tablet: "20px",
                  desktop: h5.fontSize,
                }}
              >
                So, you want to travel to
              </Text>
              <Text
                as="h1"
                {...h1.return()}
                fontSize={{ mobile: h2.fontSize, tablet: h1.fontSize }}
              >
                Space
              </Text>
            </Box>
            <Text
              maxW={{ mobile: "600", desktop: "450" }}
              px={{ mobile: "4", tablet: "0" }}
              fontSize={{
                mobile: "15px",
                tablet: "16px",
                desktop: "18px",
              }}
              // fontSize=""
            >
              Let&#39;s face it. If you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&#39;ll give you a truly
              out of this world experience!
            </Text>
          </Box>

          <NextLink href="/destination">
            <a>
              <Center
                as={motion.div}
                __css={{
                  aspectRatio: "1",
                }}
                position="relative"
                borderRadius="50%"
                p={{ mobile: "4", tablet: "10" }}
                bgColor="white"
                cursor="pointer"
                variants={exploreAuraVariants}
                whileHover="exploreHover"
                whileTap="exploreHover"
                transition={exploreAuraVariants.hoverTransition} // chakra syntax
              >
                <Text
                  as="h4"
                  {...h4.return()}
                  fontSize={{ mobile: "14px", tablet: h4.fontSize }}
                  color="custom.1"
                  letterSpacing="2px"
                >
                  Explore
                </Text>
                <Center
                  as={motion.div}
                  __css={{
                    aspectRatio: "1",
                  }}
                  width="100%"
                  height="100%"
                  borderRadius="50%"
                  position="absolute"
                  bgColor="rgba(255,255,255,0.2)"
                  mixBlendMode="normal"
                  variants={exploreAuraVariants}
                  animate="visible"
                  whileHover="auraHover"
                  whileTap="auraHover"
                  transition={exploreAuraVariants.hoverTransition} // chakra syntax
                />
              </Center>
            </a>
          </NextLink>
        </Grid>
      </Box>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
