import type { MDXComponents } from "mdx/types";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="first:pt-0 pt-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
    li: ({ children }) => <li className="pt-4">{children}</li>,
    ...components,
  };
}

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={useMDXComponents(props.components as MDXComponents)}
    />
  );
}
