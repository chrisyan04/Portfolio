export const getLinkedinData = async () => {
  const apiEndpoint = process.env.LINKEDIN_API_ENDPOINT;
  const apiKey = process.env.LINKEDIN_API_KEY;
  const queryParams = new URLSearchParams({
    linkedin_profile_url: "https://www.linkedin.com/in/chris-cx-yan/",
    skills: "include",
    use_cache: "if-recent",
    fallback_to_cache: "on-error",
  });

  const url = `${apiEndpoint}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data; // If you want to return the data, you can do it here
    } else {
      throw new Error("Request failed.");
    }
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error; // If you want to propagate the error, you can throw it again
  }
};
