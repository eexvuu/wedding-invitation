import HomeScreen from "@/components/HomeScreen";
import { fetchData } from "@/lib/fetchData";


export default async function Index() {
  const data = await fetchData();
  return (
    <>
      {data && (
        <>
          <HomeScreen
            namaPria={data.namaMempelaiPria}
            namaWanita={data.namaMempelaiWanita}
            background={data.background}
            namaTamu="Anda"
          />
        </>
      )}
    </>
  );
}
