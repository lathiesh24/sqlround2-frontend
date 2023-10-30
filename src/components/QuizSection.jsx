import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const QuizSection = () => {

    const questions = [ 
        {
            question: "Create the Library database with appropriate keys."
          },
          {
            question: "Write an SQL query to find the position of the alphabet 'g' in the username column 'Debangana' from the Users table."
          },
          {
            question: "Write an SQL query to print username and book title for which the return month is April 2023."
          },
          {
            question: "Write an SQL query to print the name from the Authors table after replacing ‘h’ with ‘H’."
          },
          {
            question: "Write a query to find the books that are currently available (not checked out) in the library."
          },
          {
            question: "Determine the top 3 authors with the most books checked out, along with the number of checkouts for each author."
          },
          {
            question: "Identify the users who have a history of returning books late more than 80% of the time, and list their usernames."
          },
          {
            question: "List all the books that are currently checked out and overdue, along with the names of the users who have them."
          },
          {
            question: "Find the author whose books have been checked out the most in the last year."
          },
          {
            question: "Determine the top 3 book genres with the number of checkouts, considering books published in the last 3 years."
          }
    ]; 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const teamName = localStorage.getItem('teamName');
  const totalQuestions = questions.length;

  const ProgressBar = () => {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    return (
      <div className='flex justify-center'>
        <div className="w-5/6 h-4 bg-gray-200 ">
          <div className={`h-full bg-violet-500 transition-all duration-300`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  };

  const backendURL = 'http://localhost:8181/api/teams/query-answers';

  const [sqlQuery, setSqlQuery] = useState('');

  const handleNextQuestion = async () => {
    try {
      await axios.post(backendURL, {
        teamName,
        questionNumber: currentQuestionIndex + 1,
        sqlAnswer: sqlQuery,
      });

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSqlQuery(''); 
      } else {
        alert('You have completed all questions.'); 
        navigate("/thankyou");
      }
    } catch (error) {
      console.error('Error saving SQL query:', error.message);
    }
  };

  return (
    <div>
      <div>
        <div><ProgressBar/></div>
        <div className='mt-12 flex justify-center'>
          Question Number: {currentQuestionIndex + 1}
        </div>
        <div className='mt-12 flex justify-center'>
          {questions[currentQuestionIndex].question}
        </div>
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
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
