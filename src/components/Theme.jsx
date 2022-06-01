import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Theme = () => {
    const {toogleTheme,isLight}=useContext(ThemeContext)
  return (
    <div>
        <button onClick={toogleTheme}>{`Make ${isLight ? "Dark":"Light"}`}</button>
        <h3>Theme</h3>
    </div>
  )
}

export default Theme