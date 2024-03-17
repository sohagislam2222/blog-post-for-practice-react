import PropTypes from 'prop-types';
const MarkAsRead = ({ bookMarks }) => {
  const totalTime = bookMarks.reduce((a, b) => a + b.reading_time, 0);
  return (
    <div>
      <h3 className="text-2xl font-bold}"> Reading Time:{totalTime}min</h3>
    </div>
  );
};

MarkAsRead.propTypes = {
  totalTime: PropTypes.number.isRequired,
};
export default MarkAsRead;
