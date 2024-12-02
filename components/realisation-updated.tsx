import { formatDate } from "@/lib/utils";

type Props = {
  date: string;
};

export default function RealisationUpdated({ date }: Props) {
  return <p className="pt-4">{formatDate(new Date(date))}</p>;
}
