// import React, { useState } from 'react'
// import Child from './components/Child';



// import DashBoard from "./components/DashBoard";

// const App = () => {
// const[ childData, setChildData]=useState('');
//   const [userName, setUserName] = useState("Jaffar");

//   const getChildData=(name)=>{
// setChildData(name)
//   }
//   return (
//     <>
//     <Child  userName={userName} getChildData={getChildData}/>
//     {childData}
//     </>
//   )
// }

// export default App;




// import React, { useState } from 'react'

// const App = () => {
// const[input, setInput]=useState('');
// const[todos, setTodos]=useState([]);

//  const handleSubmit=()=>{
//    todos.push(input)
//   setTodos[[...todos]]
//   setInput("")
// }



// const handleDelete=(indexEle)=>{

// const eleIndex= indexEle;

// const removeTodo=  todos.filter((_, index)=>  index  !== eleIndex)
// setTodos(removeTodo)
// }

//   const handleEdit=(editEle)=>{
//     // console.log(todos[editEle]);
// const  updatedValue= prompt("Edit Now", todos[editEle]);


// const updatedTodos= todos.map((item, index)=>  
//  index === editEle ? updatedValue :item 
// )
// setTodos(updatedTodos)
// // todos.splice(editEle, 1, updatedValue);
// // setTodos([...todos])


// }

//   return (
//     <>
    
// <input type="text" placeholder='Enter Todos' 
// value={input}   onChange={(e)=> setInput(e.target.value)}/>

// <button onClick={handleSubmit}>Add</button>


// <ul>
//   {
//     todos.map((currEle, index)=>{
//       return (
//         <li key={index}>
//           {currEle} 
//           <button onClick={()=> handleEdit(index)}>Edit </button>
//           <button onClick={()=> handleDelete(index)}>Delete </button>
//         </li>
//       )
//     })
//   }
// </ul>
//     </>
//   )
// }

// export default App;




import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
const App = () => {

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route  path="/" element={<SignUp />} />
  <Route  path="dashboard" element={<DashBoard />} />
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App;
