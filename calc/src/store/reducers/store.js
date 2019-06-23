const store = (state = [], action) => {

    switch(action.type) {

        case 'NEW_SPEED_ADDED':
            console.log("fired") 
            return {
                data: action.data
            }

        case 'ERR_CALC':
            return {
                errMessage: action.err.msg
            }

        default:
            return state
    }

}

export default store