"use cache"; // TODO: there is currently a bug causing sitemap can't be cached, when using dynamicIO

import { type MetadataRoute } from "next";

const sitemap = async () => {
  return [
    {
      url: "https://example.com/",
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap;
};

export default sitemap;
