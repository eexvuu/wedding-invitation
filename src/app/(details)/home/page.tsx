"use client";

import getData from "@/lib/data";
import { WeddingData } from "@/types/weddingData";
import { useEffect, useState } from "react";
export default function AboutPage() {
  const [data, setData] = useState<WeddingData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const details = getData();
      setData(details.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Informasi</h1>
      <div>
        <h2>pria : {data?.namaMempelaiPria}</h2>
      </div>
      <div>
        <h2>pria : {data?.namaMempelaiWanita}</h2>
      </div>
    </div>
  );
}
