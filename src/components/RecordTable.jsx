import PropTypes from 'prop-types';
import RecordRow from './RecordRow';

const RecordTable = ({ records, onEditRecord, onDeleteRecord }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено км</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {records.map(record => (
          <RecordRow
            key={record.date}
            record={record}
            onEditRecord={onEditRecord}
            onDeleteRecord={onDeleteRecord}
          />
        ))}
      </tbody>
    </table>
  );
};

RecordTable.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEditRecord: PropTypes.func.isRequired,
  onDeleteRecord: PropTypes.func.isRequired,
};

export default RecordTable;
