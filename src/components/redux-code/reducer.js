import constAction from './const-actions'

var localstorage = window.localStorage


var defaultNotes = [
    'Note 1',
    'Note 2',
    'Note 3',
]
var defaultRemoved = [
    'Note 5',
    'Note 6',
    'Note 7',
]

localstorage.setItem('notes', `${localstorage.getItem('notes')?localstorage.getItem('notes'):defaultNotes.join('\u2191')}`)
localstorage.setItem('removed', `${localstorage.getItem('removed')?localstorage.getItem('removed'):defaultRemoved.join('\u2191')}`)

const defaultState = {
    notes: defaultNotes,
    removed: defaultRemoved
}

const reducer = (state = defaultState, action) => {
    var notes = state.notes
    var removed = state.removed
    var index = action.index
    var notesNew
    var removedNew
    switch (action.type) {
        case constAction.ADD:
            var note = action.note
            notesNew = [...notes, note]
            localstorage.setItem('notes', notesNew.join('\u2191'))
            return Object.assign({}, state, {
                notes: notesNew
            })
        case constAction.REMOVE:
            notesNew = notes.slice(0, index).concat(notes.slice(index + 1))
            removedNew = [...removed, notes[index]]
            localstorage.setItem('notes', notesNew.join('\u2191'))
            localstorage.setItem('removed', removedNew.join('\u2191'))
            return Object.assign({}, state, {
                notes: notesNew,
                removed: removedNew
            })
        case constAction.UNFINISH:
            notesNew = [...notes, removed[index]]
            removedNew = removed.slice(0, index).concat(removed.slice(index + 1))
            localstorage.setItem('notes', notesNew.join('\u2191'))
            localstorage.setItem('removed', removedNew.join('\u2191'))
            return Object.assign({}, state, {
                notes: notesNew,
                removed: removedNew
            })
        case constAction.DELETE:
            removedNew = removed.slice(0, index).concat(removed.slice(index + 1))
            localstorage.setItem('removed', removedNew.join('\u2191'))
            return Object.assign({}, state, {
                removed: removedNew
            })
        default:
            return state;
    }
}

export default {
    constAction,
    reducer
}