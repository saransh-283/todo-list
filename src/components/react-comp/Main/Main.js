import React from 'react'
import All from '../AllItems/AllTodo'
import Finished from '../FinishedItems/Finished'
import NewTodo from '../NewTodo/NewTodo'
import Unfinished from '../Unfinished/Unfinished'
import Todo from '../Todo/Todo'
import './Main.scss'

const Presentational=()=>{
    return <div id="main-cont">
        <NewTodo />
        <Finished />
        <Unfinished />
        <All />
        <Todo/>
    </div>
}

export default Presentational