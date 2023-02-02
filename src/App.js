import './App.css';
import { useState } from 'react';
import Orders from './components/Orders';
import Registration from './components/Registration';
import Login from './components/Login';
import List from './components/List';

function App() {
  const [order,setOrder]=useState([])
  function handleOrder (coct){setOrder([...order, coct])}
  function handleRemove (coct){
    setOrder(order.filter(item=> item !== coct))
  }
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  function handleLogin(data){
    if(data.username ==='admin' && data.password ==='12345'){
      setUser({ username: data.username})
    }
  }
  function handleRegistration(data){
    setUser({username: data.username})
  }
    return (
    <div>

      {user ? (
        <div className="App">
          <h1>Добро пожаловать, {user.username}</h1>
          <List onOrder={handleOrder} />
          {order.length> 0 && <Orders order={order} OnRemove={handleRemove}/>}
        </div>
       ) : (<div>
        {isLogin ? (
          <Login onSubmit={handleLogin}/>
        ):(<Registration onSubmit={handleRegistration}/>)}
        <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? 'Зарегистрироваться':'Войти'}</button>
      </div>)}
    </div>
  );
}

export default App;
