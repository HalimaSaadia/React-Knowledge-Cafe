import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmarks, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
  handleReadingTime: PropTypes.func.isRequired
};
export default Blogs;
