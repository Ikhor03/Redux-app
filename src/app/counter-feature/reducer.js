import * as counter from './constants'

let initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case counter.INC:
            return {
                ...state,
                counter: state.counter+1
            }
        case counter.DEC:
            return {
                counter: state.counter - action.value
            }
        default:
            return state;
    }

}

export default counterReducer;