import { chakra, shouldForwardProp } from "@chakra-ui/react";
import NextLink from "next/link";
import { NextRouter } from "next/router";

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

// https://stackoverflow.com/questions/43335962/purpose-of-declare-keyword-in-typescript
// Summary: declare fix loi bien nay da khai bao roi --> khai bao lai
declare type Url = URL | string;

/**
 * Strengthen original router.push()
 * @param router Component's current using router
 * @param url
 * @returns `router.push(url, undefined, { shallow: true })`
 */
export function routerShallowPush(router: NextRouter, url: Url) {
  return router.push(url, undefined, { shallow: true });
}
