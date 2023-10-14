"use client";

import getData from "@/lib/data";
import { useState } from "react";
export default function AboutPage() {
  const details = getData();
  const [data, setData] = useState(details.data);

  return (
    <div>
      <h1>Informasi</h1>
      <div>
        <h2>pria : {data.namaMempelaiPria}</h2>
      </div>
      <div>
        <h2>pria : {data.namaMempelaiWanita}</h2>
      </div>
    </div>
  );
}
