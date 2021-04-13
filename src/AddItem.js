import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import  {addListCreator} from './actioncreator/actioncreator'

function AddItem() {

    const [valueAddItem,setValueAddItem] = useState(); 
    const dispatch = useDispatch();

    const handleChangeAddItem = (event)=>{
        setValueAddItem(event.target.value);
    }

    const handleSubmit = (event) =>{
        dispatch(addListCreator(valueAddItem));
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="flex-1 h-15 rounded shadow-md mx-2 ml-0">
            <input onChange={handleChangeAddItem} className="h-15 w-full p-3" type="text" placeholder="tambah item" />
        </form>
    )
}

export default AddItem
