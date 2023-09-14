const getBookmarksFromLS = () => {
  const savedBookmarks = localStorage.getItem("bookmarks");
  if (savedBookmarks) {
    return JSON.parse(savedBookmarks);
  } else {
    return [];
  }
};

const saveBookmarksToLS = (bookmark) => {
  const bookmarksString = JSON.stringify(bookmark);
  localStorage.setItem("bookmarks", bookmarksString);
};
const addToLS = (id) => {
  const savedBookmarks = getBookmarksFromLS();
  savedBookmarks.push(id);
  saveBookmarksToLS(savedBookmarks);
};
export { getBookmarksFromLS, addToLS };
