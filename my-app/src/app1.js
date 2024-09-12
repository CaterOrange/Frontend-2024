// import React from 'react';
import React, {useState} from 'react';
// function MyButton() {
//     return <button>I'm a button</button>;
// }

// function MyApp() {
//     return (
//         <div>
//             <h1>Welcome to my app</h1>
//             <MyButton />
//         </div>
//     );
// }

// function Greeting(props)
// {
//     // props.name = "Renu"
//     return <h1>Hello,{props.name}!</h1>
// }

// function App()
// {
//     return <Greeting name="Chandu"/>
// }

// const App = ()=>{
//     const name="Chandu"
//     return
//     (
//         <h1>Hello {name}</h1>
//     )
// }

function Counter(){
    const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     alert('click ok to continue')
    // })
    return(
        <div>
            <button onClick = {()=>setCount((prevCount)=>prevCount-1)}>-</button>
            <h1>{count}</h1>
            <button onClick = {()=>setCount((prevCount)=>prevCount+1)}>+</button>
        </div>
    );
}



export default Counter; // Remove parentheses
