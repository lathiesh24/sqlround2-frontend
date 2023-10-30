import React from 'react';
import Authentication from './Authentication';
import QuizSection from './QuizSection';

const SqlQuiz = () => {

  const  userInfoFromLocalStorage  = localStorage.getItem('teamName');

  console.log('User Information: ' , userInfoFromLocalStorage);

  return (
    <div className='flex flex-col'>
      {userInfoFromLocalStorage !== "" ? (
        <div>
          <Authentication />
        </div>
      ) : (
        <div>
          <Authentication />
        </div>
      )}
      <div className='mt-24'>
        <QuizSection />
      </div>
    </div>
  );
};

export default SqlQuiz;
