

export function networkStatus(state = { message: '' }, action) {
    switch (action.type) {
        case "REQUEST_BEGIN": {
            return Object.assign({}, state, { message: 'Please wait..' })
        }
        case "REQUEST_FINISHED": {
            return Object.assign({}, state, { message: '' })
        }
        default:
            return state
    }
}