export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const anchors = ["", "#features", "#architecture", "#research", "#demo", "#cta"];
  return anchors.map((anchor) => ({
    url: `${SITE_URL}/${anchor}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: anchor === "" ? 1.0 : 0.8,
  }));
}
