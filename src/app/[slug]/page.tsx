"use client";

// pages/index.tsx
import HomeScreen from "@/components/HomeScreen";
import getData from "@/lib/data";
import { useEffect, useState } from "react";
import { WeddingData } from "@/types/weddingData";

type tamuProps = {
  params: {
    slug: string;
  };
};

export default function Tamu(props: tamuProps) {
  const [data, setData] = useState<WeddingData | null>(null);
  const { params } = props;
  const formattedSlug = params.slug.replace(/-/g, " ");

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
          namaTamu={formattedSlug}
        />
      )}
    </>
  );
}
