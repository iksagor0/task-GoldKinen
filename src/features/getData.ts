export async function getData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch posts: " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to get posts!";
    throw new Error(errorMessage);
  }
}
