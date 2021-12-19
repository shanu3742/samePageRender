import React from 'react'
import styled from 'styled-components'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Button = ({to,children,color}) => {

    const LinkButton = styled.button`
    background-color:${color}


    `
    const executeScroll = () => scrollToRef(to)
    return (
      
        <LinkButton onClick={executeScroll}>{children}</LinkButton> 
     
    )
}

export default Button
