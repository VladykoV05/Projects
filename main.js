import { getPosts } from "./api.js";
import { renderPosts, renderNoResultsMessage } from "./render.js";

const filterInput = document.getElementById("filterInput");
const postList = document.getElementById("postList");

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const updatePostList = async () => {
  const filterValue = filterInput.value;
  try {
    const posts = await getPosts(filterValue);
    if (posts.length > 0) {
      renderPosts(postList, posts);
    } else {
      renderNoResultsMessage(postList);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

filterInput.addEventListener("input", debounce(updatePostList, 500));

updatePostList();
