import {createStore,applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const deleteList = 'deleteList'

const deleteListMaker = () =>{
    return {
        type:deleteList,
        info:'untuk menghapus list yang ada'
    }
}

const addList = 'addList'

const addListMaker = () =>{
    return {
        type:addList,
        info:'untuk menambah list yang ada'
    }
}

const initialStateList = {
    listItem:0
}

const reducerList = (state = initialStateList, action)=>{
    console.log(typeof state.listItem, typeof action.value);
    switch(action.type){
        case deleteList: return {
            ...state,
            listItem: state.listItem -1
        }
        case addList:return {
            ...state,
            listItem: state.listItem +1
        }
        case 'callApi': return {
            ...state,
            listItem:action.title
        }
        case 'addListWithValue': return {
            ...state,
            listItem:state.listItem + parseInt(action.value)
        }
        default: return state
    }
}

//var el = document.getElementById('buat-redux');
const melihatState = () =>{
    console.log(store.getState());
    //el.innerHTML = store.getState().listItem;
}

const callApi = () =>{
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => dispatch({type:'callApi',title:json[0].title}))
    } 
}

const store = createStore(reducerList, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store
//store.subscribe(melihatState);


// store.dispatch(addListMaker());
// store.dispatch(deleteListMaker());
// store.dispatch(addListMaker());
// store.dispatch(callApi());
//console.log(store.getState());

