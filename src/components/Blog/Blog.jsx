import PropTypes from 'prop-types';

const Blog = ({ blog, handleBookMarks, handleSetTime }) => {
  const {
    cover_img,
    title,
    author_img,
    author,
    reading_time,
    posted_date,
    hash_tag,
  } = blog;

  return (
    <div className=" container mx-auto  mb-5 lg:mb-20 bg-gray-200 shadow-xl rounded-lg p-5">
      <div className="w-full h-auto flex justify-center items-center">
        <img
          className="w-full my-4 h-[500px] p-5 rounded-3xl mx-auto"
          src={cover_img}
          alt=""
        />
      </div>
      <div className="flex justify-between my-4 items-center mx-auto text-center">
        <div className="flex ">
          <img className="w-14 mr-6 rounded-lg" src={author_img} alt="" />
          <div c>
            <p>{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleBookMarks(blog)}
            className="bg-blue-500 ml-3 rounded-xl p-3 hover:bg-slate-400"
          >
            Book-mark
          </button>
        </div>
      </div>
      <h3 className="text-2xl font-bold my-4">{title}</h3>
      <h3>
        {hash_tag.map(tag => (
          <p>#{tag}</p>
        ))}
        <button
          className="text-purple-900 underline font-bold"
          onClick={() => handleSetTime(reading_time)}
        >
          Mark as read
        </button>
      </h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookMarks: PropTypes.func.isRequired,
  handleSetTime: PropTypes.func.isRequired,
};
export default Blog;
