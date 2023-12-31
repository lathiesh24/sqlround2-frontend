import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Authentication = () => {

    const [teamName, setTeamName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (teamName.trim() !== "") {
            const data = {
                teamName,
                collegeName: emailId,
                phoneNumber,
            };

            try {
                const response = await axios.post('https://sqlquizappround2server.onrender.com/api/teams', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 201) { 
                    navigate('/sqlquiz');
                    console.log(response);
                } else {
                    console.error('Error:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert("Please enter your team name before proceeding.");
        }
        console.log("Triggered event successfully")
    };
    

    const teamNameStorage = localStorage.setItem('teamName', teamName);

    return (
        <div>
            <div className='h-screen flex justify-center items-center -mt-16'>
                <form className='border-2  w-[400px] h-[376px] p-8 flex-col bg-white shadow-sm rounded-md' onSubmit={handleClick}>
                    <div className='flex flex-col mt-2'>
                        <label className='font-medium text-xl'>Name</label>
                        <input
                            className='mt-2  flex justify-center items-center outline-none border-b-2'
                            placeholder='Enter Your Name'
                            type='text'
                            required
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col mt-6'>
                        <label className='font-medium text-xl'>College Name</label>
                        <input
                            className='mt-2  flex justify-center items-center outline-none border-b-2'
                            placeholder='Enter Your College Name'
                            type='text'
                            required
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                        />
                    </div>
                    
                    <div className='flex flex-col mt-6'>
                        <label className='font-medium text-xl'>Phone Number</label>
                        <input
                            className='mt-2 flex justify-center items-center outline-none border-b-2'
                            placeholder='Enter Your Phone Number'
                            type='text'
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <button
                        className='p-1 border-2 min-w-full bg-black text-white mt-8 rounded-md'
                    >
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Authentication;

