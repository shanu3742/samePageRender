import React from 'react'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Button = ({to,children}) => {
    const executeScroll = () => scrollToRef(to)
    return (
      
        <button onClick={executeScroll}>{children}</button> 
     
    )
}

export default Button
