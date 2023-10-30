import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const QuizSection = () => {

    const questions = [ 

        { 
        question: "Which of the following SQL statements is used to create a new table?", 
        answers: [ 
        
        "CREATE TABLE", 
        
        "INSERT INTO", 
        
        "SELECT", 
        
        "UPDATE" 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What is the difference between a WHERE clause and a HAVING clause?", 
        
        answers: [ 
        
        "The WHERE clause is used to filter rows before aggregation, while the HAVING clause is used to filter rows after aggregation.", 
        
        "The WHERE clause is used to filter rows based on column values, while the HAVING clause is used to filter rows based on aggregated values.", 
        
        "The WHERE clause is used to filter rows in the SELECT statement, while the HAVING clause is used to filter rows in the GROUP BY statement.", 
        
        "The WHERE clause is used to filter rows in the ORDER BY statement, while the HAVING clause is used to filter rows in the LIMIT statement." 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "Which of the following SQL statements is used to join two tables?", 
        
        answers: [ 
        
        "JOIN", 
        
        "CREATE", 
        
        "SELECT", 
        
        "UPDATE" 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "Which SQL command is used to make changes to a table's structure?", 
        
        answers: [ 
        
        "ADD", 
        
        "CHANGE", 
        
        "ALTER", 
        
        "MODIFY" 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "What is Alias in SQL?", 
        
        answers: [ 
        
        "A permanent name that can be given to a table or column in a SQL database.", 
        
        "A keyword used to join two tables in a SQL query.", 
        
        "A temporary name that can be given to a table or column in a SQL query.", 
        
        "A function used to calculate values in a SQL query." 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "What is SQL Injection?", 
        
        answers: [ 
        
        "A web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.", 
        
        "A malware infection that can damage or delete data in SQL databases.", 
        
        "A hardware failure that can cause SQL databases to become unavailable.", 
        
        "A configuration error that can expose sensitive data from SQL databases." 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What do you mean by Collation in SQL?", 
        
        answers: [ 
        
        "A character encoding that is used to store character data in SQL databases.", 
        
        "A set of rules that specify how to sort and compare character data.", 
        
        "A function that is used to convert character data from one collation to another.", 
        
        "A keyword that is used to specify the collation for a column or table in a SQL database." 
        
        ], 
        
        correctAnswer: 1 
        
        }, 
        
        { 
        
        question: "What do you mean by lock escalation?", 
        
        answers: [ 
        
        "A process by which a DBMS acquires locks on behalf of a transaction.", 
        
        "A process by which a DBMS releases locks held by a transaction.", 
        
        "A process by which a DBMS detects and resolves deadlocks.", 
        
        "A process by which a DBMS converts page locks to table locks when a certain threshold is reached." 
        
        ], 
        
        correctAnswer: 3 
        
        }, 
        
        { 
        
        question: "What does the SQL acronym DML stand for?", 
        
        answers: [ 
        
        "Data Modification Language", 
        
        "Data Management Language", 
        
        "Data Manipulation Language", 
        
        "Data Modeling Language" 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "Which of the following SQL functions is used to retrieve the current date and time?", 
        
        answers: [ 
        
        "GETDATE()", 
        
        "CURRENT_TIMESTAMP()", 
        
        "NOW()", 
        
        "DATE()" 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What does the term 'Normalization' refer to in the context of SQL databases?", 
        
        answers: [ 
        
        "The process of removing redundancy and dependency among data attributes in a table.", 
        
        "The process of breaking down a large database into smaller, more manageable parts.", 
        
        "The process of optimizing SQL queries for faster execution.", 
        
        "The process of encrypting sensitive data within a database." 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What is the purpose of the SQL CASE statement?", 
        
        answers: [ 
        
        "To handle errors in SQL queries", 
        
        "To create temporary tables", 
        
        "To perform conditional logic in SQL queries", 
        
        "To retrieve data from multiple tables" 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "What does the SQL acronym TCL stand for?", 
        
        answers: [ 
        
        "Type Conversion Language", 
        
        "Text Control Language", 
        
        "Transaction Control Language", 
        
        "Table Control Language" 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "Which SQL command is used to remove a table from a database?", 
        
        answers: [ 
        
        "DELETE TABLE", 
        
        "REMOVE TABLE", 
        
        "DROP TABLE", 
        
        "ERASE TABLE" 
        
        ], 
        
        correctAnswer: 2 
        
        }, 
        
        { 
        
        question: "In SQL, what is the purpose of the ORDER BY clause?", 
        
        answers: [ 
        
        "To filter data based on specific conditions", 
        
        "To update existing records in a table", 
        
        "To delete rows from a table", 
        
        "To sort the result set based on specified columns in ascending or descending order." 
        
        ], 
        
        correctAnswer: 3 
        
        }, 
        
        { 
        
        question: "The SQL WHERE clause can be used to filter rows based on column values.", 
        
        answers: [
                "True",
                "False"
        ],
        
        correctAnswer: 0
        
        }, 
        
        { 
        
        question: "The SQL ORDER BY clause can be used to sort rows in a specific order.", 
        
        answers: [
            "True",
            "False"
    ],
    
    correctAnswer: 0
        
        }, 
        
        { 
        
        question: "The SQL GROUP BY clause can be used to group rows together based on common values.", 
        
        answers: [
            "True",
            "False"
    ],
    
    correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What is Dynamic SQL?", 
        
        answers: [ 
        
        "A technique where SQL statements are constructed at runtime, based on input parameters or dynamic conditions.", 
        
        "A type of SQL statement that is used to query dynamic data.", 
        
        "A technique where SQL statements are stored in a database and executed at runtime.", 
        
        "A type of SQL statement that can be used to execute arbitrary code on the database server." 
        
        ], 
        
        correctAnswer: 0 
        
        }, 
        
        { 
        
        question: "What does the SQL acronym ACID stand for in the context of database transactions?", 
        
        answers: [ 
        
        "Atomicity, Consistency, Integrity, Durability", 
        
        "Association, Causality, Integration, Division", 
        
        "Access, Control, Identification, Distribution", 
        
        "Authorization, Confidentiality, Integrity, Delivery" 
        
        ], 
        
        correctAnswer: 0 
        
        } 
        
        ]; 

    const navigate = useNavigate();
    const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0);
    const [currentAnswerIndex , setCurrentAnswerIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [score, setScore] = useState(0);


    useEffect(() => {
        const newScore = selectedAnswers.reduce((acc, answer, index) => {
            return answer === questions[index].correctAnswer ? acc + 1 : acc;
        }, 0);
        setScore(newScore);
    }, [selectedAnswers]);

    const handleAnswerClick = (index) => {
        setSelectedAnswers((prevSelectedAnswers) => {
            const updatedAnswers = [...prevSelectedAnswers];
            updatedAnswers[currentQuestionIndex] = index;
            return updatedAnswers;
        });

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } 
    };
    

    const  teamName  = localStorage.getItem('teamName');

    const submitScore = async () => {
        if (!teamName) {
            alert("Please provide a team name and complete the quiz.");
            return;
        }
    
        const confirmSubmit = window.confirm("Are you sure you want to submit your score?");
    
        if (!confirmSubmit) {
            return; 
        }
        
                try {
                    const submitResponse = await axios.post('https://sqlr1-backend.onrender.com/api/teams/submit-score', {
                        teamName: teamName, 
                        score: score,
                    });
    
                    if (submitResponse.status === 200) {
                        navigate('/thankyou');
                    } else {
                        alert("Failed to submit score. Please try again later.");
                    }
                } catch (error) {
                    console.error("Error submitting score:", error);
                    alert("Failed to submit score. Please try again later.");
                }
    };
    
    
        
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

     const nextQuestion = () => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
         else {
            alert("Please select an answer before moving to the next question.");
        }
    }

    const previousQuestion = ()=>{
        if (currentQuestionIndex >= 1){
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            alert("You cannot go back")
        }
    }

  return (
    <div>
        <div>
            <div><ProgressBar/></div>
            <div
             className='mt-12 flex justify-center'
             >
                Question Number : {currentQuestionIndex + 1
            }</div>
            <div
            className='mt-12 flex justify-center'
            >
                {questions[currentQuestionIndex].question}
            </div>
            <div className='flex gap-8 flex-col justify-center items-center mt-12'>
            {questions[currentQuestionIndex].answers.map((answer, index) => {
    return (
        <div
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={`flex border-2 p-3 w-96 hover:cursor-pointer  ${
                selectedAnswers[currentQuestionIndex] === index ? 'bg-violet-400' : 'hover:bg-slate-200'
            }`}
        >
            {answer}
        </div>
    );
})}

   </div>
        </div>
        <div className='flex flex-row mt-12 gap-24 justify-center items-center mb-12' >
        { currentQuestionIndex === questions.length - 1 ? 
        (<div 
        className='bg-violet-600 p-2 w-32 flex justify-center items-center text-white cursor-pointer text-2xl'
        onClick={submitScore}>
          Submit 
        </div>) : 
        (<div 
        className='bg-violet-600 p-2 w-32 flex justify-center items-center text-white cursor-pointer text-xl'
        onClick={nextQuestion}>
          Next
        </div>) }
        <div 
        className='bg-violet-600 p-2 w-32 flex justify-center items-center text-white cursor-pointer text-xl'
        onClick={previousQuestion}>
            Back
        </div>
        </div>
    </div>
  )
}

export default QuizSection