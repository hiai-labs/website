import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Products",
      links: [
        {
          text: "Data Engine",
          href: getPermalink("/products/data-engine"),
        },
        {
          text: "AI Platform",
          // href: getPermalink("/homes/startup"),
        },
        {
          text: "Social Forum",
          // href: getPermalink("/homes/mobile-app"),
        },
      ],
    },
    {
      text: "Roles",
      links: [
        {
          text: "Data Annotator",
          // href: getPermalink("/#features"),
        },
        {
          text: "AI Developer",
          // href: getPermalink("/services"),
        },
        {
          text: "AI User (Individual)",
          // href: getPermalink("/pricing"),
        },
        {
          text: "AI User (Enterprise)",
          // href: getPermalink("/about"),
        },
        // {
        //   text: "Contact",
        //   href: getPermalink("/contact"),
        // },
        // {
        //   text: "Terms",
        //   href: getPermalink("/terms"),
        // },
        // {
        //   text: "Privacy policy",
        //   href: getPermalink("/privacy"),
        // },
      ],
    },
    {
      text: "Community",
      links: [
        {
          text: "Social",
          // href: getPermalink("/example/landing/lead-generation"),
        },
        {
          text: "Team",
          // href: getPermalink("/example/landing/sales"),
        },
        {
          text: "Career",
          // href: getPermalink("/example/landing/click-through"),
        },
        {
          text: "Events",
          // href: getPermalink("/example/landing/product"),
        },
      ],
    },
    {
      text: "Blog",
      href: "#",
    },
    // {
    //   text: "Widgets",
    //   href: "#",
    // },
  ],
  actions: [
    {
      text: "Launch Data Engine",
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
