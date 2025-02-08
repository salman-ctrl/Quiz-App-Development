import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [nama, setNama] = useState(localStorage.getItem('nama') || ' ');

    return (
        <userContext.Provider value={{ nama, setNama }}>
            {children}
        </userContext.Provider>
    )

}