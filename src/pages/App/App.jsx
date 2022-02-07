import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import MerchandisePage from "../MerchandisePage/MerchandisePage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";



function App() {
  const [user, setUser] = useState(getUser());
  
  
  return (
    <main className="App">
      { 
      user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="orders/new" element={<NewOrderPage />}/>
          <Route path="orders/" element={<OrderHistoryPage />}/>
          <Route path="/" element={<MerchandisePage user={user}/>} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
      }
     
    </main>
  );
}

export default App;
