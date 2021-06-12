const ADD = "ADD"

const addFunc = (note) => {
    return {
        type: ADD,
        note
    }
}

export default {
    ADD,
    addFunc
}