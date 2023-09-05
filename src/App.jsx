import {BrowserRouter,Routes,Route} from "react-router-dom";
import UpdateUser from "./UpdateUser";
import CreateUser from "./CreateUser";
import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<User />}/>
            <Route path="/create" element={<CreateUser />}/>
            <Route path="/update/:id" element={<UpdateUser />}/>
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
