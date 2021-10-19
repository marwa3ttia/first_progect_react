   
import React from 'react'
import './Counter.css'

const Counter = (prods) => {

    return (
        <div>
           
<h1> {prods.value_counter}</h1>
<button className="incr" onClick = {prods.incrment}> +</button>
<button  className="decr" onClick = {prods.decrment}> -</button>

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
