// const noop = function () { };
export const DefaultOptions = {
  // // events
  // onLoadingSlow: noop,
  // onSuccess: noop,
  // onError: noop,
  // onErrorRetry: onErrorRetry,
  // onDiscarded: noop,
  // switches
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  // timeouts
  // errorRetryInterval: slowConnection ? 10000 : 5000,
  focusThrottleInterval: 5 * 1000,
  dedupingInterval: 2 * 1000,
  // loadingTimeout: slowConnection ? 5000 : 3000,
  // providers
  // compare: function (currentData, newData) {
  //     return stableHash(currentData) == stableHash(newData);
  // },
  // isPaused: function () { return false; },
  // cache: cache,
  // mutate: mutate,
  fallback: {},
};

export const HOUR_TO_MS = 60 * 60 * 1000;
export const MINUTE_TO_MS = 60 * 1000;
