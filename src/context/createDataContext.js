import React, { useReducer, useContext } from 'react';

export default (reducer, actions, initialState, stateKey='state') => {

    const Context = React.createContext();

    const Provider = ({children}) =>{
        const [state, dispatch] = useReducer(reducer, initialState);

        let actionsWithDispatch = {}
        for(let key in actions){
            actionsWithDispatch[key] = actions[key](dispatch);
        }
        
        return <Context.Provider 
                value={{[stateKey]:state, ...actionsWithDispatch}}
            >
            {children}
        </Context.Provider>
    }

    return {Context, Provider}
}