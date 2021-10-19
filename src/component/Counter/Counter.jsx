   
import React from 'react'
import './Counter.css'

const Counter = (prods) => {

    return (
        <div className = "counter__div">
           
<h1 className = "text-center"> {prods.value_counter}</h1>
<div className = "d-flex justify-content-around">
<button className=" btn btn-primary p-2 w-25 m-1" onClick = {prods.incrment}> +</button>
<button  className="btn btn-danger  p-2 w-25 m-1" onClick = {prods.decrment}> -</button>
</div>
        </div>
    )
}
export default Counter   




// import React from 'react'
// import {useState} from 'react';

// const Counter = () => {
//     const [value_counter , setValue_counter] = useState (0);
//     const incrment = () =>{
//         setValue_counter( value_counter +1);
//       }
//       const decrment = () =>{
//         setValue_counter( value_counter -1 );
//       }
//     return (
//         <div>
           
// <h1> {value_counter}</h1>
// <button onClick = {incrment}> +</button>
// <button onClick = {decrment}> -</button>

//         </div>
//     )
// }
// export default Counter
