import { Middleware } from "swr";

export const imageMiddleware: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    // Before hook runs...

    // Handle the next middleware, or the `useSWR` hook if this is the last one.
    const swr = useSWRNext(key, fetcher, config);

    // After hook runs...
    return swr;
  };
};
