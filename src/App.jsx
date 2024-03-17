import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

const storedBookMark = JSON.parse(localStorage.getItem('cart') || '[]');
function App() {
  const [bookMarks, setBookMarks] = useState(storedBookMark);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(bookMarks));
  }, [bookMarks]);

  const handleBookMarks = blog => {
    const isExist = bookMarks.find(book => book.id == blog.id);

    if (!isExist) {
      const newBookMarks = [...bookMarks, blog];
      setBookMarks(newBookMarks);
    } else {
      toast.warn('Already Added');
    }
  };

  const handleRemove = blog => {
    console.log(blog);
    const nBookmark = bookMarks.filter(book => book.id !== blog.id);

    setBookMarks(nBookmark);
  };

  return (
    <>
      <div className="max-w-7xl container mx-auto">
        <Header></Header>
      </div>
      <div className="max-w-7xl container mx-auto  flex flex-col justify-between md:flex-row lg:flex-row mt-6">
        <div className="w-full md:w-[55%] lg:w-[55%]">
          <Blogs handleBookMarks={handleBookMarks}></Blogs>
        </div>
        <div className="w-full md:w-[40%] lg:w-[40%]  ">
          <Bookmarks
            bookMarks={bookMarks}
            handleRemove={handleRemove}
          ></Bookmarks>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
