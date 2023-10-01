export const fetchUnsplashPhotos = async (query = "") => {
  try {
    const response = await fetch(
      `
      ${
        query === ""
          ? `https://api.unsplash.com/photos`
          : `https://api.unsplash.com/search/photos?query=${query}`
      }
      `,
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_API_BASE_URL}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
};
