import {
    connect
} from 'react-redux'
import {
    createStore
} from 'redux'
import reducer from '../redux-code/reducer'
import maps from '../react-redux-connect/maps'

const store = createStore(reducer.reducer)

import Finished from '../react-comp/Finished/Finished'
import NewTodo from '../react-comp/NewTodo/NewTodo'
import Unfinished from '../react-comp/Unfinished/Unfinished'

const FinishedConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(Finished)
const NewTodoConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(NewTodo)
const UnfinishedConnected = connect(maps.mapStateToProps, maps.mapDispatchToProps)(Unfinished)

export default {
    store,
    FinishedConnected,
    NewTodoConnected,
    UnfinishedConnected,
}