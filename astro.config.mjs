// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [
    starlight({
      title: "Ograrium",
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
