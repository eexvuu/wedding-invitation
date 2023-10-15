
import { fetchData } from "@/lib/fetchData";
export default async function AboutPage() {
  const data = await fetchData();

  return (
    <>
      <div className="bg-yellow-500">
        <h1>Informasi</h1>
        <div>
          <h2>pria : {data?.namaMempelaiPria}</h2>
        </div>
        <div>
          <h2>pria : {data?.namaMempelaiWanita}</h2>
        </div>
      </div>
    </>
  );
}
