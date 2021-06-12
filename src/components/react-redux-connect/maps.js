import {
    createStore
} from 'redux'
import reducer from '../redux-code/reducer'

const store = createStore(reducer.reducer)

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: function(note) {
            return dispatch(reducer.constAction.addFunc(note))
        }
    }
}

export default {
    store,
    mapStateToProps,
    mapDispatchToProps
}