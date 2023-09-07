import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
export const locales = {
  root: {
    label: "English",
    lang: "en"
  },
  zh: {
    label: "简体中文",
    lang: "zh"
  }
};
const site = "https://docs.bewater.xyz/";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "BeWater Docs",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
      logo: {
        light: "/src/assets/logo-light.svg",
        dark: "/src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/bewaterxyz/open-doc/edit/main/docs/",
      },
      social: {
        github: "https://github.com/BeWaterXYZ",
        twitter: "https://twitter.com/bewaterofficial",
        discord: "https://discord.gg/wUGf9KnK",
      },
      head: [
        {
          tag: "script",
          attrs: {
            src: "script.js",
            "data-site": "",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: site + "og.jpg?v=1",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "og.jpg?v=1",
          },
        },
      ],
      locales,
      sidebar: [
        {
          label: "Overview",
          translations: {
            zh: "从这里开始",
          },
          items: [
            {
              label: "What is BeWater",
              link: "what",
              translations: {
                zh: "BeWater 是什么",
              },
            },
          ],
        },
        {
          label: "Guides",
          translations: {
            zh: "指南",
          },
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          translations: {
            zh: "参考",
          },
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      lastUpdated: true,
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
