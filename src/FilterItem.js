import React, { useState } from 'react'
import  {changeFilterCreator} from './actioncreator/actioncreator'
import {useDispatch} from 'react-redux'

function FilterItem() {

    const [finishStat,setFinishStat] = useState(false)
    const [notYetStat,setNotYetStat] = useState(false)
    const dispatch = useDispatch()
    
    const handleChangeFilterFinish = ()=>{
        if(finishStat){
            setFinishStat(false);
            dispatch(changeFilterCreator('none'))
        }
        else{
            if(notYetStat){
                setFinishStat(true);
                setNotYetStat(false);
                dispatch(changeFilterCreator(true));
            }
            else{
                setFinishStat(true);
                dispatch(changeFilterCreator(true));
            }
        }
    }

    const handleChangeFilterNotYet = ()=>{
        if(notYetStat){
            setNotYetStat(false);
            dispatch(changeFilterCreator('none'))
        }
        else{
            if(finishStat){
                setNotYetStat(true);
                setFinishStat(false);
                dispatch(changeFilterCreator(false));
            }
            else{
                setNotYetStat(true);
                dispatch(changeFilterCreator(false));
            }
        }
    }

    return (
        <>
            <div className="w-16 h-12 flex flex-col items-center">
                <input checked={finishStat} onChange={handleChangeFilterFinish} className="w-16 h-8" type="checkbox"/>
                <span className="text-sm mt-1">finish</span>
            </div>
            <div className="w-16 h-12 flex flex-col items-center">
                <input checked={notYetStat} onChange={handleChangeFilterNotYet} className="w-16 h-8" type="checkbox"/>
                <span className="text-sm mt-1">not yet</span>
            </div>
        </>
    )
}

export default FilterItem
