import './App.css';
import axios from 'axios'; 
import { useEffect, useState } from 'react' 
import User from './components/user/User';

function App() {
  const [users, setUsers] = useState()

  useEffect(()=> {
    const fetchData = async () => {
      let api = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(api.data);
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <User users={users}/>
    </div>
  );
}

export default App;
