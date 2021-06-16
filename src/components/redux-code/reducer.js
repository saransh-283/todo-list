import constAction from './const-actions'

var localstorage = window.localStorage

var defaultNotes = [
    'Note 1',
    'Note 2',
    'Note 3',
].join('\u2191')
var defaultRemoved = [
    'Note 5',
    'Note 6',
    'Note 7',
].join('\u2191')

const defaultState = {
    notes: localstorage.getItem('notes') ? localstorage.getItem('notes') : defaultNotes,
    removed: localstorage.getItem('removed') ? localstorage.getItem('removed') : defaultRemoved
}

localstorage.setItem('notes', defaultState.notes)
localstorage.setItem('removed', defaultState.removed)

const reducer = (state = defaultState, action) => {
    var notes = state.notes.split('\u2191')
    var removed = state.removed.split('\u2191')
    var notesNew
    var removedNew
    switch (action.type) {
        case constAction.ADD:
            notesNew = [...notes, action.note]
            localstorage.setItem('notes', notesNew)
            return Object.assign({}, state, {
                notes: notesNew
            })
            break
        case constAction.REMOVE:
            notesNew = notes.filter((val, idx) => idx != action.index).join('\u2191')
            removedNew = removed.concat(notes[action.index]).join('\u2191')
            localstorage.setItem('notes', notesNew)
            localstorage.setItem('removed', removedNew)
            return Object.assign({}, state, {
                notes: notesNew,
                removed: removedNew
            })
            break
        case constAction.UNFINISH:
            notesNew = [...notes, removed[action.index]].join('\u2191')
            removedNew = removed.filter((val, idx) => idx != action.index).join('\u2191')
            localstorage.setItem('notes', notesNew)
            localstorage.setItem('removed', removedNew)
            return Object.assign({}, state, {
                notes: notesNew,
                removed: removedNew
            })
        case constAction.DELETE:
            removedNew = removed.filter((val, idx) => idx != action.index).join('\u2191')
            localstorage.setItem('removed', removedNew)
            return Object.assign({}, state, {
                removed: removedNew
            })
        default:
            return state
            break
    }
}

export default {
    constAction,
    reducer
}