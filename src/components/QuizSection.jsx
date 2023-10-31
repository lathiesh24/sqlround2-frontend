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

  const [allAnswers, setAllAnswers] = useState(Array(questions.length).fill('')); 

  const handleNextQuestion = async () => {

    const confirmSubmission = window.confirm('Are you sure you want to submit your query? You cannot make any changes after this.');

    const updatedAnswers = [...allAnswers];
    updatedAnswers[currentQuestionIndex] = sqlQuery; 

    const postData = {
      teamName: teamName,
      answers: updatedAnswers.map((sqlAnswer, idx) => ({
        questionNumber: idx + 1,
        sqlAnswer: sqlAnswer,
      })),
    };
if(confirmSubmission){
  try {
    await axios.post(backendURL, postData);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSqlQuery(''); 
      setAllAnswers(updatedAnswers); 
    } else {
      alert('You have completed all questions.');
      navigate('/thankyou');
    }
  } catch (error) {
    console.error('Error saving SQL query:', error.message);
  }
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
            Submit Query
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
