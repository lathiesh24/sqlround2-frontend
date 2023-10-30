import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from './components/Authentication';
import QuizSection from './components/QuizSection';
import ThankYou from './components/ThankYou';

const App = () => {
  return (
    <div>
      <Routes>
       <Route exact path="/" element={<Authentication/>}/>
       <Route exact path="/sqlquiz" element={<QuizSection/>}/>
       <Route exact path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  )
}

export default App