import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const QuizSection = () => {

  const questions = [ 
    {
      question: "Write an SQL query to find the position of the alphabet 'g' in the username column 'Debangana' from the Users table.",
      images: ["Genres.png,Books_Genres.png"]
    },
    {
      question: "Write an SQL query to print username and book title for which the return month is April 2023.",
      images: ["Users.png"]
    },
    {
      question: "Write a SQL query to print the name from the Authors table after replacing ‘h’ with ‘H’.",
      images: ["Books.png,Users.png"]
    },
    {
      question: "Write a query to find the books that are currently available (not checked out) in the library.",
      images: ["Books.png"]
    },
    {
      question: "Determine the top 3 authors with the most books checked out, along with the number of checkouts for each author.",
      images: ["Authors.png"]
    },
    {
      question: "Identify the users who have a history of returning books late more than 80% of the time, and list their usernames.",
      images: ["Users.png, Checkouts.png"]
    },
    {
      question: "List all the books that are currently checked out and overdue, along with the names of the users who have them.",
      images: ["Books.png.png , Users.png"]
    },
    {
      question: "Find the author whose books have been checked out the most in the last year.",
      images: ["Authors.png, Books.png , Checkouts.png"]
    },
    {
      question: "Determine the top 3 book genres with the number of checkouts, considering books published in the last 3 years.",
      images: ["Genres.png,Books_Genres.png,Checkouts.png"]
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

  const backendURL = 'https://sqlquizappround2server.onrender.com/api/teams/query-answers';

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
        <div className='mt-12 flex justify-center'>
        <div>
         {questions[currentQuestionIndex].images.map((image, index) => {
            return (
              <img key={index} src={image} alt={`Question Image`} />
            )}
         )}
         </div>
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
