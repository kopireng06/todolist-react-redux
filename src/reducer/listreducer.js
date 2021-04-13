const initialState = {
    listItem:[],
    search:'',
    filter:'none',
    biggestId:200
}

const addList = 'addList';
const delList = 'delList';
const addListAsync = 'addListAsync';
const changeStatusList = 'changeStatusList';
const changeSearch = 'changeSearch';
const changeFilter = 'changeFilter';

const listReducer = (state=initialState ,action) =>{
    switch(action.type){
        case addList:
            var newListItem = {
                userId:1,
                id:state.biggestId+1,
                title:action.title,
                completed:false
            }
            return {
                ...state,
                listItem:[newListItem,...state.listItem],
                biggestId:state.biggestId+1
            }
        case delList:
            return {
                ...state,
                listItem:state.listItem.filter((list)=>{
                    if(list.id === action.id){
                        return false
                    }
                    return true;
                })
            } 
        case addListAsync:
            return {
                ...state,
                listItem:action.list
            }
        case changeStatusList:
            return {
                ...state,
                listItem:state.listItem.map((list)=>{
                    if(list.id === action.id){
                        return{
                            ...list,
                            completed:action.completed
                        }
                    }
                    return list;
                })
            }
        case changeSearch:
            return {
                ...state,
                search:action.search
            } 
        case changeFilter:
            return {
                ...state,
                filter:action.filter
            } 
        default:
            return initialState
    }
}

export default listReducer;