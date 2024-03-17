import PropTypes from 'prop-types';

const BookMark = ({ bookMark, handleRemove }) => {
  const { title } = bookMark;

  return (
    <div className="flex justify-between px-5 p-2 items-center">
      <h3 className="bg-slate-300 rounded-xl mt-2 p-5 text-xl font-bold">
        {title}
      </h3>
      <button
        onClick={() => handleRemove(bookMark)}
        className="btn btn-primary"
      >
        Remove
      </button>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default BookMark;
