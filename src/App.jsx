import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)


  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[]) 

  function handleLogin(email, password) {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role : 'admin'}))
    }else if ( userData) {
      const employee = userData.find( (e) => e.email === email && e.password === password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role : 'employee', data: employee}))
      }
    }
    else{
      alert("Invalid email or password");
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? 
      <AdminDashboard changeUser={setUser} data={"Admin"} /> : 
      (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
      
    </>
  );
}

export default App;

// useEffect(()=>{
//   // setLocalStorage()
//   getLocalStorage()
//    })
