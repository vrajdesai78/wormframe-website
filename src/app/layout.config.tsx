import { type BaseLayoutProps } from "fumadocs-ui/layout";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "My App",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};
