import {createStore} from 'redux'
import mainReducer from './reducer'
const store = createStore(mainReducer)
window.store = store
export default store