const initialState = ['Tony Stark', 'Steve Rodgers', ' Nick Fury', 'Natasha Romanova', 'Clint Barton', 'Bruce Banner', 'Wanda Maximoff'];

const ADD_GUEST = "ADD_GUEST";
const REMOVE_GUEST = "REMOVE_GUEST"

export function addGuest(name){
  return {
    type: ADD_GUEST,
    payload: name
  }
}

// don't want to use name, could be multiples
export function removeGuest(index){
  return{
    type: REMOVE_GUEST,
    payload: index
  }
}


export default function reducer(state = initialState, action) {
  switch(action.type){
    case ADD_GUEST:
      return [...state, action.payload];
    case REMOVE_GUEST:
      return state.filter((name, i) => i !== action.payload)
    default: 
      return state;
  }
}
