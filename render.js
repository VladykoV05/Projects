export function renderPosts(container, posts) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    fragment.appendChild(li);
  });
  container.appendChild(fragment);
}

export function renderNoResultsMessage(container) {
  container.innerHTML =
    '<li class="no-results">Sorry, it seems this post is not on the list</li>';
}
