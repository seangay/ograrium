// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

export default defineConfig({
  markdown: {
    remarkRehype: {
      footnoteBackLabel: "Back to content",
      footnoteBackContent: "\u21A9",
      footnoteLabelProperties: { className: [] },
      footnoteLabelTagName: "h5",
    },
  },
  vite: {
    resolve: {
      alias: {
        "@assets": "/src/assets",
      },
    },
  },
  integrations: [
    starlight({
      title: "Ograrium",
      customCss: ["./src/styles/custom.css"],
      logo: {
        src: "./src/assets/site-icon.png",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/seangay/ograrium",
        },
      ],
      sidebar: [
        {
          label: "Home Lab",
          autogenerate: { directory: "home-lab" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  adapter: vercel(),
});
