import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
import MarkAsRead from '../MarkAsRead/MarkAsRead';

const Bookmarks = ({ bookMarks, handleRemove }) => {
  const { title } = bookMarks;
  return (
    <div className="w-full bg-blue-200 p-5  rounded-lg ">
      <div>
        <MarkAsRead bookMarks={bookMarks}></MarkAsRead>;
      </div>

      <h3 className="text-xl font-bold">Bookmarks:{bookMarks.length}</h3>
      {bookMarks.map((bookMark, index) => (
        <BookMark
          key={index}
          bookMark={bookMark}
          handleRemove={handleRemove}
        ></BookMark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
};
export default Bookmarks;
