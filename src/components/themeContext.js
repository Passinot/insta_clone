import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)
    const toggleTheme = () => {
        setDark(!dark)
    }
    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
export default ThemeProvider