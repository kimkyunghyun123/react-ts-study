import React, {useReducer} from 'react';
import { useDispatch } from 'react-redux';

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count : number;
  text : string;
  color : Color;
  isGood : boolean;
}

type Action = 
  | {type : 'SET_COUNT', count : number}
  | {type : 'SET_TEXT', text : string}
  | {type : 'SET_COLOR', color : Color}
  | {type : 'TOGGLE_GOOD'}


function reducer(state : State, action : Action){
  switch(action.type){
    case 'SET_COUNT' :
      return {
        ...state,
        count : action.count
      }
    case 'SET_COLOR' : 
      return {
        ...state,
        color : action.color
      }
    case 'SET_TEXT' : 
      return {
        ...state,
        text : action.text
      }
    case 'TOGGLE_GOOD' : 
      return {
        ...state,
        isGood : !state.isGood
      }
    default :
      throw new Error('Unhandled action')
  }
}


function ReducerSample(){
  const [state ,dispatch] = useReducer(reducer, {
    count : 0,
    text : 'hello', 
    color : 'red',
    isGood : true
  })

  const setCount = () => dispatch({type : 'SET_COUNT', count : 5})
  const setText = () => dispatch({type : 'SET_TEXT', text : 'bye'})
  const setColor = () => dispatch({type : 'SET_COLOR', color : 'orange'})
  //const toggleGood = () => dispatch({type : })
}

export default ReducerSample;