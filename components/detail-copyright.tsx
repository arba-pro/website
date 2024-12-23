type Props = {
  copyright: string[];
};

export default function DetailCopyright({ copyright }: Props) {
  if (copyright.length === 0) return null;

  return (
    <p className="pt-4 text-xs text-gray-500 font-mono">
      images ©{" "}
      {copyright.length > 1
        ? `${copyright.slice(0, -1).join(", ")} & ${copyright.slice(-1)}`
        : copyright[0]}
    </p>
  );
}
