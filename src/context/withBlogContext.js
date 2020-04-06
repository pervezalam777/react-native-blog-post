import React, {useContext} from 'react';
import {Context} from "./BlogContext"

export default (Component) => {
    return (props) => {
        const data = useContext(Context);
        return (
            <React.Fragment>
                <Component {...props} {...data} />
            </React.Fragment>
        )
    }
}