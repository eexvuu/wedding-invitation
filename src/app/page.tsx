'use client'

// pages/index.tsx
import HomeScreen from "@/components/HomeScreen";
import getData from "@/lib/data";
import { useEffect, useState } from "react";
import { WeddingData } from "@/types/weddingData";

export default function Index() {
  const [data, setData] = useState<WeddingData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = getData();
      setData(details.data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data && (
        <HomeScreen
          namaPria={data.namaMempelaiPria}
          namaWanita={data.namaMempelaiWanita}
          namaTamu="Anda"
        />
      )}
    </>
  );
}
