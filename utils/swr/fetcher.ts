function urlParser(url: string) {
  return url[0] === "/" ? url.substring(1) : url;
}

export const FetcherDefault = (url: string) => {
  const parser = urlParser(url);

  return fetch(parser).then((res) => res.json());
};

export const FetcherImage = (url: string) => {
  const parser = urlParser(url);

  return fetch(parser).then((res) => {
    return res.blob().then((imgBlob) => URL.createObjectURL(imgBlob));
  });
};

// fetch type: https://stackoverflow.com/questions/41103360/how-to-use-fetch-in-typescript
export const FetcherJsonServer = <T>(url: string) => {
  const parser = urlParser(url);

  return fetch(`http://localhost:${process.env.DB_PORT}/${parser}`)
    .then((res) => {
      if (!res.ok) return undefined;

      return res.json() as Promise<T>;
    })
    .catch((err: Error) => {
      //externalErrorLogging.error(error); /* <-- made up logging service */
      // throw err;
      /* 1. Rethrow the error so consumer can still catch it
        2. If you want the page fetch default data
        (in getStaticProps or use swr`config.fallbackData`)
        don't throw err
      */
    });
};
