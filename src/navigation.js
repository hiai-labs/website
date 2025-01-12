import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Products",
      links: [
        {
          text: "Data Engine",
          href: getPermalink("/products/data-engine"),
        },
        {
          text: "AI Platform",
          href: getPermalink("/products/ai-platform"),
        },
        {
          text: "Agora (Coming Soon)",
          // href: getPermalink("/homes/mobile-app"),
        },
      ],
    },
    {
      text: "Resources",
      links: [
        {
          text: "Blog",
          href: getPermalink("/blog"),
        },
      ],
    },
    {
      text: "Community",
      links: [
        {
          text: "Discord",
          href: "https://discord.gg/GtebUJjS",
        },
        {
          text: "X/Twitter",
          href: "https://x.com/HiAILabs",
        },
      ],
    },
  ],
  showAction: false,
  actions: [
    {
      text: "Launch App",
      href: "https://data-engine.staging.hiailabs.com/",
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
    {
      ariaLabel: "Discord",
      icon: "tabler:brand-discord",
      href: "https://discord.gg/GtebUJjS",
    },
    { ariaLabel: "X", icon: "tabler:brand-x", href: "https://x.com/HiAILabs" },
    // {
    //   ariaLabel: "Github",
    //   icon: "tabler:brand-github",
    //   href: "https://github.com/hiai-labs",
    // },
  ],
};
