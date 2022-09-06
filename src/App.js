import './App.css';
import { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'

const myAPI = "todolist"
const path = '/todolist';

function App() {
  const [todoList, setTodoList] = useState([])

  function getTodoList(e) {
    let id = e.input
    API.get(myAPI, path + "/" + id)
       .then(response => {
         console.log(response.items)
         setTodoList(response.items);
       })
       .catch(error => {
         console.log(error)
       })
  }

  useEffect(() => {
    getTodoList(12);
  }, []);

  return (
    <div className="container mx-auto w-96 p-4 border-2 border-gray-100 rounded-lg m-5 shadow-lg bg-white">
      <h1 className='font-serif text-5xl mb-5'>To Do</h1>
      <ul className='list-inside'>
        {
          todoList.map((item, index) => {
            return <li key={index}>
              <input type='checkbox' className='mr-3'/>
                {item}
              </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
