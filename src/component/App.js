import React ,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import  {addListAsyncCreator} from '../actioncreator/actioncreator'
import axios from 'axios'
import Item from './Item'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import FilterItem from './FilterItem'

function App() {

    const list = useSelector(state=>state.listItem);
    const filter = useSelector(state => state.filter);
    const search = useSelector(state=>state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>dispatch(addListAsyncCreator(res.data)));
    }, []);

    const renderListItem = () =>{
        const filterListSearch = (data) => {
            return data.title.includes(search);
        } 
        const filterListCompleted = (data) => {
            return data.completed == filter;
        }
        if(filter != 'none'){
            const newList = list.filter(filterListSearch).filter(filterListCompleted);   
            return newList.map((data,i)=><Item data={data} key={i} index={i}/>)
        }
        else{
            const newList2 = list.filter(filterListSearch);
            return newList2.map((data,i)=><Item data={data} key={i} index={i}/>)
        }

    }

    return (
        <>  
            <div className="w-1/2 py-10 mx-auto">
                <div className="flex w-full items-center">
                    <AddItem/>
                    <SearchItem/>
                    <FilterItem/>
                </div>
                {renderListItem()}
            </div>
        </>
    )
}

export default App
