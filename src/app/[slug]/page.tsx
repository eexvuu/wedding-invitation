import HomeScreen from "@/components/HomeScreen";
import { fetchData } from "@/lib/fetchData";
import type { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  return {
    title: `Undangan Untuk ${slug}`,
    description: "Silahkan dibuka undangan tersebut, terimakasih",
  };
}

export default async function Tamu(props: Props) {
  const data = await fetchData();
  const { params } = props;
  const formattedSlug = params.slug.replace(/-/g, " ");

  return (
    <>
      {data && (
        <HomeScreen
          namaPria={data.namaMempelaiPria}
          namaWanita={data.namaMempelaiWanita}
          namaTamu={formattedSlug}
        />
      )}
    </>
  );
}
