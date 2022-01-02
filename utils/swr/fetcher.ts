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
}

export const FetcherJsonServer = (url: string) => {
  const parser = urlParser(url);

  return fetch(`http://localhost:${process.env.DB_PORT}/${parser}`).then(
    (res) => res.json()
  );
};
