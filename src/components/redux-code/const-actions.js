const ADD = "ADD"
const REMOVE = "REMOVE"
const UNFINISH = "UNFINISH"
const DELETE = "DELETE"

const addFunc = (note) => {
    return {
        type: ADD,
        note
    }
}

const removeFunc = (index) => {
    return {
        type: REMOVE,
        index
    }
}

const unfinishFunc = (index) => {
    return {
        type: UNFINISH,
        index
    }
}

const deleteFunc = (index) => {
    return {
        type: DELETE,
        index
    }
}

export default {
    ADD,
    REMOVE,
    UNFINISH,
    DELETE,
    addFunc,
    removeFunc,
    unfinishFunc,
    deleteFunc
}