import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

function SQLCodeEditor() {
  const [sqlQuery, setSqlQuery] = useState(''); 

  const handleEditorDidMount = (editor, monaco) => {
    // You can customize the editor here if needed
  };

  const handleSaveQuery = () => {
    // Here, you can console log the SQL query or send it to the database
    console.log('SQL Query:', sqlQuery);
    
    // If you want to send it to a database, you would typically use an API call here.
    // Example using fetch:
    /*
    fetch('/your-database-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: sqlQuery }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Query saved:', data);
      })
      .catch(error => {
        console.error('Error saving query:', error);
      });
    */
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
        editorDidMount={handleEditorDidMount}
      />
      <button 
      className='p-3 border min-w-32 bg-slate-600 text-white mt-4 font-medium'
      onClick={handleSaveQuery}
      >Save Query</button>
    </div>
  );
}

export default SQLCodeEditor;
