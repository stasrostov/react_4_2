import PropTypes from 'prop-types';

const RecordRow = ({ record, onEditRecord, onDeleteRecord }) => {
  return (
    <tr>
      <td>{record.date}</td>
      <td>{record.distance.toFixed(1)}</td>
      <td>
        <button onClick={() => onEditRecord(record.date)}>✎</button>
        <button onClick={() => onDeleteRecord(record.date)}>✘</button>
      </td>
    </tr>
  );
};

RecordRow.propTypes = {
  record: PropTypes.shape({
    date: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
  onEditRecord: PropTypes.func.isRequired,
  onDeleteRecord: PropTypes.func.isRequired,
};

export default RecordRow;
