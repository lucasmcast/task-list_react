import React from 'react';
import { connect } from 'react-redux'

const handleClickButtonDelete = param => event => {
    console.log("Delete", param)
}

const handleClickButtonFinish = param => event => {
    console.log("Finish", param)
}

const handleClickButtonUpdate = param => event => {
    console.log("Update", param)
}
function ButtonTable(props) {
    let onClick;
    
    let taskModel = props.task
    if(props.variant === "delete"){
        onClick = handleClickButtonDelete
    }else if(props.variant === "finish"){
        onClick = handleClickButtonFinish
    }else if(props.variant === "update"){
        onClick = handleClickButtonUpdate
    }

    return (
        <button
            className={`btn-${props.nameButton}`}
            onClick={onClick(taskModel)}
        >
            {props.nameButton}
        </button>
    )

}
const mapStateToProps = (state) =>{
    return(
        {tasks: state.tasks}
    )
}
export default connect(mapStateToProps)(ButtonTable);