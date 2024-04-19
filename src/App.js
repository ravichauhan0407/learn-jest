import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';
import { useState } from 'react';

function App() {
  const [users,setUsers]  = useState([])


  return (
     <div>
         <UserForm onSubmit={(value)=>setUsers(prev=>[...prev,value])}/>
         <hr/>
         <UserList users={users}/>
     </div>
  );
}

export default App;
