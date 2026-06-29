import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchAllDiscoveries(params?: {
  location?: string;
  categoryId?: string;
  categoryName?: string;
  filterBy?: string;
}) {
  const { data } = await apiClient.get("/api/v1/discovery/web/all", { params });
  return data.data;
}

export async function fetchDiscoveryCategories(params: { location?: string }) {
  const { data } = await apiClient.get("/api/v1/discovery/web/category/all", {
    params,
  });
  return data.data;
}
