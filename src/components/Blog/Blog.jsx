import PropTypes from "prop-types";
import {BiBookmark} from "react-icons/bi"
const Blog = ({ blog, handleAddBookmarks, handleReadingTime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <div>
        <img src={cover} className="w-full" alt="" />
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <div>
            <img src={author_img} className="h-16" alt="" />
          </div>
          <div className="ml-5">
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <p>{reading_time} minutes read</p>
          <button onClick={ ()=> handleAddBookmarks(blog)}>
            <BiBookmark />
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div>
        {hashtags.map((hash,idx) => <span key={idx}><a href="#">{hash}</a> </span>)}
      </div>
      <button onClick={()=> handleReadingTime(reading_time)}>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func
};
export default Blog;
