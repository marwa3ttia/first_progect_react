import React from 'react'
import './Counter.css'
import Counter from './Counter';
import {useState} from 'react';
const Action_counter = () => {
    const [value_counter , setValue_counter] = useState (0);
        const incrment = () =>{
            setValue_counter( value_counter +1);
          }
          const decrment = () =>{
            setValue_counter( value_counter -1 );
          }
    return (
        <div className = "counter__div">
            {/* {
            value_counter <= 0 ||   value_counter == 100
            ?
            alert("the max number is 100 and min nomber is 0")
            :

            } */}
            <Counter value_counter  = {value_counter } incrment = {incrment }
            decrment = {decrment}
            ></Counter>
        </div>
    )
}

export default Action_counter
