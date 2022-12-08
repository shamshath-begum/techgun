

import { useState } from "react";
import Crud from "./components/Crud";

function App() {
let [users , setUsers]=useState([
  {
name:"shama",
age:45,
address:"abc",
quali:"cse"
},
{
  name:"shama",
age:45,
address:"abc",
quali:"cse"
},
{
  name:"shama",
age:45,
address:"abc",
quali:"cse"
},
{
  name:"shama",
age:45,
address:"abc",
quali:"cse"
},
{
  name:"shama",
age:45,
address:"abc",
quali:"cse"
}
])
  return (
    <div>

<Crud users={users} setUsers={setUsers}/>
  </div>
  )

   
  
}

export default App;
