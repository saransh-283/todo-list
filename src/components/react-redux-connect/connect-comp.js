import {
    connect
} from 'react-redux'
import {
    createStore
} from 'redux'
import reducer from '../redux-code/reducer'
import maps from '../react-redux-connect/maps'

const store = createStore(reducer.reducer)


import AllTodo from '../react-comp/AllTodo/AllTodo'
import Finished from '../react-comp/Finished/Finished'
import NewTodo from '../react-comp/NewTodo/NewTodo'
import Unfinished from '../react-comp/Unfinished/Unfinished'
import Todo from '../react-comp/Todo/Todo'

const AllTodoConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(AllTodo)
const FinishedConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(Finished)
const NewTodoConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(NewTodo)
const UnfinishedConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(Unfinished)
const TodoConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(Todo)

export default {
    store,
    AllTodoConnected,
    FinishedConnected,
    NewTodoConnected,
    UnfinishedConnected,
    TodoConnected
}