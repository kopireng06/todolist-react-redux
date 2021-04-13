import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {changeStatusListCreator} from './actioncreator/actioncreator'
import {delListCreator} from './actioncreator/actioncreator'

function Item(props) {

    const dispatch = useDispatch();
    const state = props.data.completed;
    const getBorder = ()=> state ? ' border-blue-600' : ' border-green-600'

    return (
        <div className={"w-full h-20 transition duration-500 border-2 bg-white rounded-md p-3 my-5 shadow-md flex items-center"+getBorder()} >
            <div className="flex-1 text-xl font-semibold">{props.data.title}</div>
            <img onClick={()=>dispatch(delListCreator(props.data.id))} className="w-5 h-5 mr-2" src="delete.png" alt=""/>
            <input type="checkbox" checked={props.data.completed}
                onChange={()=>dispatch(changeStatusListCreator(!props.data.completed,props.data.id))}
                className="w-5 h-5"
            />
        </div>
    )
}

export default Item
