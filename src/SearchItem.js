import React from 'react'
import {useDispatch} from 'react-redux'
import  {changeSearchCreator} from './actioncreator/actioncreator'

function SearchItem() {
    
    const dispatch = useDispatch();
    const handleChangeSearchItem = (event)=>{
        dispatch(changeSearchCreator(event.target.value));
    }

    return (
        <input onChange={handleChangeSearchItem} className="flex-1 h-15 rounded shadow-md p-3 mx-2" 
        type="text" placeholder="cari disini" />
    )
}

export default SearchItem
