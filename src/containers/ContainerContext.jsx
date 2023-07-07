import React from 'react'

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error()    
    }
}

const increment = () => ({type: 'increment'})
const decrement = () => ({type: 'decrement'})

const actions = dispatch => ({
    increase: () => dispatch(increment()),
    decrease: () => dispatch(decrement())
})

const containerContext = React.createContext(initialState)

export const ContainerContextProvider = props => {
    const [reducerState, dispatch] = React.useReducer(reducer, initialState);
    const reducerActions = actions(dispatch);
    const context = {
        state: {...reducerState},
        actions: {...reducerActions}
    }

    return (
        <ContainerContextProvider.Provider value={context}>
            {props.childern}
        </ContainerContextProvider.Provider>
    )
}

export const useContainerContext = () => React.useContext(ContainerContext)