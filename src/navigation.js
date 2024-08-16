import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  // links: [
  //   {
  //     text: "Homes",
  //     links: [
  //       {
  //         text: "SaaS",
  //         href: getPermalink("/homes/saas"),
  //       },
  //       {
  //         text: "Startup",
  //         href: getPermalink("/homes/startup"),
  //       },
  //       {
  //         text: "Mobile App",
  //         href: getPermalink("/homes/mobile-app"),
  //       },
  //       {
  //         text: "Personal",
  //         href: getPermalink("/homes/personal"),
  //       },
  //     ],
  //   },
  //   {
  //     text: "Pages",
  //     links: [
  //       {
  //         text: "Features (Anchor Link)",
  //         href: getPermalink("/#features"),
  //       },
  //       {
  //         text: "Services",
  //         href: getPermalink("/services"),
  //       },
  //       {
  //         text: "Pricing",
  //         href: getPermalink("/pricing"),
  //       },
  //       {
  //         text: "About us",
  //         href: getPermalink("/about"),
  //       },
  //       {
  //         text: "Contact",
  //         href: getPermalink("/contact"),
  //       },
  //       {
  //         text: "Terms",
  //         href: getPermalink("/terms"),
  //       },
  //       {
  //         text: "Privacy policy",
  //         href: getPermalink("/privacy"),
  //       },
  //     ],
  //   },
  //   {
  //     text: "Landing",
  //     links: [
  //       {
  //         text: "Lead Generation",
  //         href: getPermalink("/example/landing/lead-generation"),
  //       },
  //       {
  //         text: "Long-form Sales",
  //         href: getPermalink("/example/landing/sales"),
  //       },
  //       {
  //         text: "Click-Through",
  //         href: getPermalink("/example/landing/click-through"),
  //       },
  //       {
  //         text: "Product Details (or Services)",
  //         href: getPermalink("/example/landing/product"),
  //       },
  //       {
  //         text: "Coming Soon or Pre-Launch",
  //         href: getPermalink("/example/landing/pre-launch"),
  //       },
  //       {
  //         text: "Subscription",
  //         href: getPermalink("/example/landing/subscription"),
  //       },
  //     ],
  //   },
  //   {
  //     text: "Blog",
  //     links: [
  //       {
  //         text: "Blog List",
  //         href: getBlogPermalink(),
  //       },
  //       {
  //         text: "Article",
  //         href: getPermalink(
  //           "get-started-website-with-astro-tailwind-css",
  //           "post",
  //         ),
  //       },
  //       {
  //         text: "Article (with MDX)",
  //         href: getPermalink("markdown-elements-demo-post", "post"),
  //       },
  //       {
  //         text: "Category Page",
  //         href: getPermalink("tutorials", "category"),
  //       },
  //       {
  //         text: "Tag Page",
  //         href: getPermalink("astro", "tag"),
  //       },
  //     ],
  //   },
  //   {
  //     text: "Widgets",
  //     href: "#",
  //   },
  // ],
  actions: [
    {
      text: "Launch App",
      href: "https://github.com/onwidget/astrowind",
      target: "_blank",
    },
  ],
};

export const footerData = {
  // links: [
  //   {
  //     title: "Platform",
  //     links: [
  //       { text: "Developer API", href: "#" },
  //       { text: "Partners", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     links: [
  //       { text: "Docs", href: "#" },
  //       { text: "Community Forum", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     links: [
  //       { text: "About", href: "#" },
  //       { text: "Careers", href: "#" },
  //       { text: "Press", href: "#" },
  //     ],
  //   },
  // ],

  // secondaryLinks: [
  //   { text: "Terms", href: getPermalink("/terms") },
  //   { text: "Privacy Policy", href: getPermalink("/privacy") },
  // ],
  // socialLinks: [
  //   { ariaLabel: "X", icon: "tabler:brand-x", href: "#" },
  //   {
  //     ariaLabel: "Github",
  //     icon: "tabler:brand-github",
  //     href: "https://github.com/orgs/hiai-labs",
  //   },
  // ],

  links: [
    {
      title: "Platform",
      links: [{ text: "Developer API" }, { text: "Partners" }],
    },
    {
      title: "Support",
      links: [{ text: "Docs" }, { text: "Community Forum" }],
    },
    {
      title: "Company",
      links: [{ text: "About" }, { text: "Careers" }, { text: "Press" }],
    },
  ],

  secondaryLinks: [{ text: "Terms" }, { text: "Privacy Policy" }],
  socialLinks: [
    { ariaLabel: "X", icon: "tabler:brand-x" },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
    },
  ],
};
