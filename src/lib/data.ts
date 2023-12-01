import { WeddingData } from "../types/weddingData"
import background from "@/assets/bg.jpg";

// Define the return type of the getData function
const getData = (): { data: WeddingData } => ({
  data: {
    namaMempelaiPria: "Usamah Abdul Matin",
    namaMempelaiWanita: "Kim Min-ji",
    tanggalPernikahan: "01 Januari 2024",
    tempatPernikahan: "Jakarta Selatan, Indonesia",
    background: background,
  },
});

export default getData;
