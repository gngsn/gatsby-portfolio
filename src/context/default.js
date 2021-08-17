const initState = {
    theme: 'light'
}

const initReducer = function (state, {
    type,
    payload
}) {
    const newReducer = {
        ...state,
        [type]: payload
    }
    console.log(type, payload)
    return newReducer
}

export {
    initState,
    initReducer
}