import { WeddingData } from "../types/weddingData"

// Define the return type of the getData function
const getData = (): { data: WeddingData } => ({
  data: {
    namaMempelaiPria: "Andi",
    namaMempelaiWanita: "Aisyah",
    tanggalPernikahan: "01 Januari 2022",
    tempatPernikahan: "Jakarta Selatan, Indonesia",
  },
});

export default getData;
