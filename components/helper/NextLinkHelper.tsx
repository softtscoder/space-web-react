import { chakra, shouldForwardProp } from "@chakra-ui/react";
import NextLink from "next/link";

export const NextLinkHelper = chakra(NextLink, {
  shouldForwardProp: (prop) => {
    // don't forward Chakra's props
    const isChakraProp = !shouldForwardProp(prop);
    if (isChakraProp) return false;

    // else, only forward `sample` prop
    return [
      "href",
      "as",
      "replace",
      "scroll",
      "shallow",
      "passHref",
      "prefetch",
      "locale",
    ].includes(prop);
  },
});
