import constAction from './const-actions'

const defaultState = {
    notes: [
        'Note 1',
        'Note 2'
    ]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constAction.ADD:
            return Object.assign({}, state, {
                notes: [...state.notes, action.note]
            })
            break
        default:
            return state
            break
    }
}

export default {
    constAction,
    reducer
}