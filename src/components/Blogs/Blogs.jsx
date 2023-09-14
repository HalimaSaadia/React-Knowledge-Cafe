import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
import { getBookmarksFromLS } from "../../../public/bookmarksLS";

const Blogs = ({ handleAddBookmarks, handleReadingTime, loadBookmarksFromLS }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(()=>{
    if(blogs.length){
      const bookmarksLS = getBookmarksFromLS()
      const savedBookmarks = []
      for (const id of bookmarksLS) {
        const blog = blogs.find( blg => blg.id === id)
        if(blog){
          savedBookmarks.push(blog)
        }
      }
      loadBookmarksFromLS(savedBookmarks)
    }
  },[blogs])
  return (
    <div className="md:w-2/3 ">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookmarks={handleAddBookmarks}
          handleReadingTime={handleReadingTime}
        />
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
  loadBookmarksFromLS: PropTypes.func
};
export default Blogs;
