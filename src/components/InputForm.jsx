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

  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) && dateString === date.toISOString().split('T')[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !distance) {
      alert('Пожалуйста, заполните оба поля.');
      return;
    }

    if (!isValidDate(date)) {
      alert('Пожалуйста, введите корректную дату.');
      return;
    }

    if (isNaN(parseFloat(distance)) || parseFloat(distance) <= 0) {
      alert('Пожалуйста, введите корректное значение для расстояния.');
      return;
    }

    onAddRecord(date, parseFloat(distance));
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <input
        type="date"
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
