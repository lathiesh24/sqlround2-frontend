import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from './components/Authentication';
import QuizSection from './components/QuizSection';
import ThankYou from './components/ThankYou';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-montserrat">
      <div>
        <Navbar/>
      </div>
      <Routes>
       <Route exact path="/" element={<QuizSection/>}/>
       <Route exact path="/sqlquiz" element={<QuizSection/>}/>
       <Route exact path="/thankyou" element={<ThankYou/>}/>
      </Routes>
    </div>
  )
}

export default App