import { createContext, useMemo, useState } from "react";
import Proprype from 'prop-types'

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [nama, setNama] = useState(localStorage.getItem('nama') || ' ');
    const [level, setLevel] = useState('');

    const contextValue = useMemo(() => ({ nama, setNama, level, setLevel }), [nama, level]);

    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    )
}

UserProvider.prototype = {
    children: Proprype.node.isRequired
}