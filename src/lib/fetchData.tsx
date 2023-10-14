import getData from "./data";

export async function fetchData() {
  const res = getData();
  return res.data;
}