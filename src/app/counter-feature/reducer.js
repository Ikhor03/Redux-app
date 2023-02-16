
let initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter++
            }
        case 'DEC':
            return {
                counter: state.counter - action.value
            }
        default:
            return state;
    }

}

export default counterReducer;