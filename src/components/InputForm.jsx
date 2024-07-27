import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ onAddRecord, editRecord }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    if (editRecord) {
      setDate(editRecord.date);
      setDistance(editRecord.distance);
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !distance) return;
    onAddRecord(date, parseFloat(distance));
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <input
        type="text"
        placeholder="дд.мм.гггг"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Пройдено км"
        value={distance}
        onChange={e => setDistance(e.target.value)}
      />
      <button type="submit">OK</button>
    </form>
  );
};

InputForm.propTypes = {
  onAddRecord: PropTypes.func.isRequired,
  editRecord: PropTypes.shape({
    date: PropTypes.string,
    distance: PropTypes.number,
  }),
};

export default InputForm;
