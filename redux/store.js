import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper, Context } from 'next-redux-wrapper'
import thunk from 'redux-thunk'

const composedEnhancer = compose(
    composeWithDevTools(applyMiddleware(thunk)))


    // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

export const store = (context) => createStore(
    rootReducer,
    composedEnhancer
)

export const wrapper = createWrapper(store)

// console.log(wrapper)

// export default initStore
