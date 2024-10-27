import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="first:pt-0 pt-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-4 pt-2">{children}</ul>,
    li: ({ children }) => <li className="pt-2">{children}</li>,
    ...components,
  };
}
