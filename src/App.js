import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getUser } from './redux/duck/user.reducer';
import { useDispatch, useSelector} from 'react-redux'

import { decreament, increament } from './redux/duck/counter.reducer';

function App() {

  const dispatch = useDispatch()
  const {userList} = useSelector(state => state.user)
  const {count} = useSelector(state => state.counter)
  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <div className="App">
      <pre>
        {
          JSON.stringify(userList, null,2)
        }
      </pre>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increament())}>tambah</button>
      <button onClick={()=> dispatch(decreament())}>kurang</button>
    </div>
  );
}


export default App;
