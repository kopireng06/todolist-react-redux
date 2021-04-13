import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
      list:state.listItem
    }
  }

const ChildApp = ({list}) => {
return(
    <div>{list}</div>
  )
}
 
export default connect(mapStateToProps)(ChildApp);