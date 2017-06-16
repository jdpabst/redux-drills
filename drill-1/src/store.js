import { createStore } from 'redux';
import guestList from './ducks/guestList';
// pass in the reducer to the store function
export default createStore(guestList);