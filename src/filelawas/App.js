import React,{useState,useEffect} from 'react'
import ChildApp from './ChildApp'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
  return {
    list:state.listItem
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    myDispacth:()=>dispatch({type:'addList'}),
    myDispacth2:(event)=>dispatch({type:'addListWithValue',value:event.target.value})
  }
}


function App(props) {

  useEffect(() => {
    console.log(props);
  });

  return (
      <>
        <div>{props.list}</div>
        <div onClick={props.myDispacth}>klik</div>
        <form>
          <input type="number" onChange={props.myDispacth2}/>
        </form>
        <ChildApp/>
      </>
  );

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
