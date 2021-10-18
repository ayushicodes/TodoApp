import React from 'react';
import Todo from './Todo';
import Tododata from './Tododata';

function App() {
  const todolist = Tododata.map(item => <Todo key={item.id} Tododata={item} />)
  return (
    <div>
      {todolist}
    </div>
  )
}

export default App;
