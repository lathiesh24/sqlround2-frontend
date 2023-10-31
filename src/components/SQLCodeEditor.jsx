import React, { useState } from 'react';
import axios from 'axios';
import Editor from '@monaco-editor/react';

const backendURL = 'https://sqlquizappround2server.onrender.com/api/teams/query-answers'; 

const SQLCodeEditor = () => {
  const [sqlQuery, setSqlQuery] = useState('');
  const teamName = 'TeamA'; 
  const questionNumber = '1';

  const handleSaveQuery = async () => {
    try {
      const sqlAnswer = sqlQuery;


      const response = await axios.get(`${backendURL}/${teamName}/${questionNumber}`);

      if (response.data) {
        const recordId = response.data._id;
        const updatedResponse = await axios.put(`${backendURL}/${recordId}`, { sqlAnswer });
        console.log('SQL Query updated:', updatedResponse.data);
      } else {
        const newResponse = await axios.post(backendURL, {
          teamName,
          questionNumber,
          sqlAnswer,
        });
        console.log('New SQL Query saved:', newResponse.data);
      }
    } catch (error) {
      console.error('Error saving/updating SQL query:', error);
    }
  };

  return (
    <div>
      <Editor
        height="500px"
        language="sql"
        theme="vs-dark"
        value={sqlQuery}
        onChange={(value) => setSqlQuery(value)}
        options={{
          wordWrap: 'on',
          automaticLayout: true,
          scrollbar: {
            horizontal: 'auto',
          },
        }}
      />
      <button
        className="p-3 border min-w-32 bg-slate-600 text-white mt-4 font-medium"
        onClick={handleSaveQuery}
      >
        Save Query
      </button>
    </div>
  );
};

export default SQLCodeEditor;
