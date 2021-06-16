import {
    createStore
} from 'redux'
import reducer from '../redux-code/reducer'

const store = createStore(reducer.reducer)

const mapStateToProps = (state) => {
    return {
        notes: state.notes.split('\u2191'),
        removed: state.removed.split('\u2191')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: function(note) {
            return dispatch(reducer.constAction.addFunc(note))
        },
        removeNote: function(index) {
            return dispatch(reducer.constAction.removeFunc(index))
        },
        unfinishNote: function(index) {
            return dispatch(reducer.constAction.unfinishFunc(index))
        },
        deleteNote: function(index) {
            return dispatch(reducer.constAction.deleteFunc(index))
        }
    }
}

export default {
    store,
    mapStateToProps,
    mapDispatchToProps
}