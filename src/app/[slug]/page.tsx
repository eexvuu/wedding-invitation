import HomeScreen from "@/components/HomeScreen";
import { fetchData } from "@/lib/fetchData";

type tamuProps = {
  params: {
    slug: string;
  };
};


export default async function Tamu(props: tamuProps) {
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
