import { CustomMDX } from "@/components/mdx-remote";

type Props = {
  content: string | null;
};

export default function DetailContent({ content }: Props) {
  if (!content) return null;

  return <CustomMDX source={content} />;
}
