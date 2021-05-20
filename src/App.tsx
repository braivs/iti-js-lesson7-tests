import React from 'react';
import logo from './logo.svg';
import './App.css';
import {addFriends, StudentType} from './tasks/tasks';
import {getSum} from './tasks2/tasks';

const students: Array<StudentType> = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 90
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
];


function App() {

  /*console.log('==before addFriends call==')
  console.log(students);
  console.log('===after addFriends call==')
  console.log(addFriends(students));*/

  console.log(getSum(1234));

  return (
    <div>

    </div>
  );
}

export default App;
