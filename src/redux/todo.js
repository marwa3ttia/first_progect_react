import { createStore } from "redux";

//action add
const  ADD_TODO = "ADD_TODO";
export const addtodoAction = (payload) =>{
    return {
      type : ADD_TODO , 
       payload
    }
}

//action delete
const  DELETE_TODO = "DELETE_TODO";
export const deletetodoAction = (payload) =>{
    return {
      type : DELETE_TODO , 
       payload
    }
}

//state add
const initialState = {
    todos : []
}
//state delete



//reducer add
const todoReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case ADD_TODO:
     return {...state , todos :[...state.todos,action.payload]}
    
    
     case DELETE_TODO:
        return {
            ...state,
            todos: [...state.todos.filter((todo, i) => i !== action.payload)],
        }
   
        default:
        return state
    }

}



//store add
export const store = createStore(todoReducer);