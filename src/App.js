import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1fZhob9sn9mJ_Pa5XjOoo8HR-HJAnotWP777-YdNEZPU/values/Sheet1?key=AIzaSyCeTWT2ePYMKTp7r41EQ2dXoP-zDoOKf7w`);
      setData(response.data.values);
    } catch (error) {
      console.error('Error fetching data from Google Sheets API:', error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="header">Google Sheet Data</h1>
      <button className="sync-button" onClick={fetchData}
        style={{ margin: '10px', padding: '10px' }}
      >Sync</button>
      <table className="data-table"
        style={{ margin: '10px', padding: '10px' }}
      >
    
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={index === 0 ? { fontWeight: 'bold' } : {}}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
