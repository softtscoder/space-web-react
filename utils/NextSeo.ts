// eslint-disable-next-line import/no-anonymous-default-export
export const DefaultSeoConfig = {
  canonical: "https://space-web-tannguyencse19.vercel.app/",
  openGraph: {
    site_name: "space-web-tannguyencse19.vercel.app",
  },
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary
  twitter: {
    cardType: "summary_large_image",
    site: "@space_web_tannguyencse19",
    // Twitter will read the og:title, og:image and og:description tags for their card.
  },
};

export const DefaultBlogJsonLd = {
  authorName: "admin",
  images: [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg",
  ],
  datePublished: "2015-02-05T08:00:00+08:00",
  dateModified: "2015-02-05T09:00:00+08:00",
};
