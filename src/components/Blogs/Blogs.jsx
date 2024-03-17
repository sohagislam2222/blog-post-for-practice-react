import { useEffect, useState } from 'react';

import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMarks, handleSetTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="container  mx-auto">
      {blogs.map(blog => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookMarks={handleBookMarks}
          handleSetTime={handleSetTime}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
