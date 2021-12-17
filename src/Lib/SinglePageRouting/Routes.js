import React from 'react'
import './Routes.css'

const Routes = ({path,children}) => {
    return (
        <div  ref={path}>
            {children}
        </div>
    )
}

export default Routes
