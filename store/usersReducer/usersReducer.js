
const initialState = {
    users: [],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FIRSTS':
            return state

        default:
            return state;
    }
}

export default usersReducer