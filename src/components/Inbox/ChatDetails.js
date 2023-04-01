import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { allChats } from '../../api';

const ChatDetails = () => {

    const cookies = new Cookies();
    let token = cookies.get('token');

    let navigate = useNavigate()
    
    const [chats, setChats] = useState([])

    useEffect(() => {
        getAllChats()
      }, []);

      const getAllChats = async () => {
        let response = await allChats(token);
        if (response == 404) {
            navigate('/');
        }
        setChats(response.data)
      }

      const goToInbox = (id) => {
        navigate('/inbox', {
            state: {
              userId: id
            }
          });
      }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold mb-5">Users</h1>
          <p className="text-xl mb-5">These users are available for chat</p>
          <div className="w-full max-w-lg bg-white px-4">
            <ul className="divide-y divide-gray-300">
              {chats.map((user,index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => goToInbox(user.user_guid)}
                >
                  <div>
                    <h2 className="text-xl font-bold">{user.email}</h2>
                    <p className="text-gray-600">{user.user_type}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    

export default ChatDetails;
