export const Calc = (speed) => {
    return (dispatch, getState) => {

        dispatch({type: 'NEW_SPEED_ADDED', data: speed})

    }
}