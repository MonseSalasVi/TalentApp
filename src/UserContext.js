import React, { createContext, useState } from 'react'

//const  [user, setUser]= useState('')
/*
const initialState = {
  user: null
}
*/




export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const  [user, setUser]= useState({ });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
        );
}