import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const authedClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function uploadFileToPresignedUrl(payload: {
  file: File;
  category: string;
  categoryId: string;
}): Promise<string> {
  const { file, category, categoryId } = payload;

  try {
    const fileName = encodeURIComponent(file.name);
    const query = {
      category,
      categoryId,
      fileName,
    };

    const presignResponse = await authedClient.get(
      `/api/v1/discovery/presigned/url`,
      { params: query }
    );

    const presignedUrl =
      presignResponse.data?.data?.presignedUrl

    if (!presignedUrl) {
      throw new Error("Failed to get presigned URL from server");
    }

    await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    // Return the final URL without query parameters
    return presignedUrl.split("?")[0];
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}
