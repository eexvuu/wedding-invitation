import Intro from "@/components/Intro";
import Pengantin from "@/components/Pengantin";
import { fetchData } from "@/lib/fetchData";

export default async function AboutPage() {
  const data = await fetchData();

  return (
    <>
      {data && (
        <>
          <Intro
            background={data.background}
            namaPria={data.namaMempelaiPria}
            namaWanita={data.namaMempelaiWanita}
          />
          <Pengantin
            background={data.background}
            namaPria={data.namaMempelaiPria}
            namaWanita={data.namaMempelaiWanita}
          />
          
        </>
      )}
    </>
  );
}
