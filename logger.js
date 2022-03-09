export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev state: ', prevState)
        console.log('Arguments: ', args)
        const nextState = reducer(prevState, action, args)
        console.log('nextState: ', nextState)
        console.groupEnd()
        return nextState
    }
}
