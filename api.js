export function getPosts(filter) {
  const url = `https://jsonplaceholder.typicode.com/posts?title_like=${encodeURIComponent(
    filter
  )}`;
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
}
