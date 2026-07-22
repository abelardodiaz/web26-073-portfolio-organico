import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Mermaid } from "./Mermaid";

type Props = {
  source: string;
};

type PreProps = {
  children?: {
    props?: {
      className?: string;
      children?: string;
    };
  };
} & React.HTMLAttributes<HTMLPreElement>;

function Pre(props: PreProps) {
  const code = props.children;
  if (code?.props?.className === "language-mermaid") {
    return <Mermaid chart={String(code.props.children ?? "").trim()} />;
  }
  return <pre {...props} />;
}

export function MdxContent({ source }: Props) {
  return (
    <MDXRemote
      source={source}
      components={{ pre: Pre }}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
