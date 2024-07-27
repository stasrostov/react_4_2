import { useState } from 'react';
import InputForm from './components/InputForm';
import RecordTable from './components/RecordTable';
import './App.css';

const App = () => {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  const addRecord = (date, distance) => {
    const newRecords = [...records];
    const existingRecordIndex = newRecords.findIndex(record => record.date === date);

    if (existingRecordIndex !== -1) {
      newRecords[existingRecordIndex].distance += distance;
    } else {
      newRecords.push({ date, distance });
    }

    newRecords.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
    setRecords(newRecords);
  };

  const deleteRecord = (deleteDate) => {
    setRecords(records.filter(record => record.date !== deleteDate));
  };

  const editRecordByDate = (editDate) => {
    const recordToEdit = records.find(record => record.date === editDate);
    setEditRecord(recordToEdit);
    deleteRecord(editDate);
  };

  return (
    <div className="App">
      <InputForm onAddRecord={addRecord} editRecord={editRecord} />
      <RecordTable
        records={records}
        onEditRecord={editRecordByDate}
        onDeleteRecord={deleteRecord}
      />
    </div>
  );
};

export default App;
