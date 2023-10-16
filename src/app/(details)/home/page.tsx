import Intro from "@/components/Intro";
import Music from "@/components/Music";
import Pengantin from "@/components/Pengantin";
import getData from "@/lib/data";

export default function AboutPage() {
  const data =  getData().data

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
          <Music />
        </>
      )}
    </>
  );
}
