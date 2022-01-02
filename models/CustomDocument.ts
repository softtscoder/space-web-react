import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import type { NextPage } from "next";
import { LayoutProps } from "./common";

/**
 * _**Notes**_: `NextPageWithLayout` and `AppPropsWithLayout` have diffrent usage.
 *
 * @example
 * ```jsx
 * function MyApp({ Component, pageProps }: AppPropsWithLayout)
 *
 * const Home: NextPageWithLayout = ({}: HomeProps)
 * ```
 */
export type NextPageWithLayout<ComponentProps = {}> = NextPage<ComponentProps> & {
  Layout?: (props: LayoutProps) => ReactElement;
};

/**
 * _**Notes**_: `NextPageWithLayout` and `AppPropsWithLayout` have diffrent usage.
 *
 * @example
 * ```jsx
 * function MyApp({ Component, pageProps }: AppPropsWithLayout)
 *
 * const Home: NextPageWithLayout = ({}: HomeProps)
 * ```
 */
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
