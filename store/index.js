import { combineReducers, createStore } from 'redux'
import usersReducer from './playrsReducer/usersReducer'


const redusers = combineReducers({ usersReducer })

const store = createStore(redusers)

window.store = store

export default store
