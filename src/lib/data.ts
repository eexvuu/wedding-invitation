import { WeddingData } from "../types/weddingData"
import background from "@/assets/bg.jpg";

// Define the return type of the getData function
const getData = (): { data: WeddingData } => ({
  data: {
    namaMempelaiPria: "Andi Hermansyah",
    namaMempelaiWanita: "Aisyah Salsabila",
    tanggalPernikahan: "01 Januari 2022",
    tempatPernikahan: "Jakarta Selatan, Indonesia",
    background: background,
  },
});

export default getData;
