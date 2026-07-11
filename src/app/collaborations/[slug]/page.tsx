import { notFound } from "next/navigation";
import { collaborationRegistry } from "@/lib/collaborations/registry";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {

  const { slug } = await params;

  const Collaboration = collaborationRegistry[slug];

  if (!Collaboration) {
    notFound();
  }

  return <Collaboration />;

}