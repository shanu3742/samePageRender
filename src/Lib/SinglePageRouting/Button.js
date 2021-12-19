import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types/'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Button = ({to,children,color,type,variant,...props}) => {

    const Link = styled.button`
    background-color:${color}


    `
    const executeScroll = () => scrollToRef(to)
    return (
      
        <Link onClick={executeScroll}>{children}</Link> 
     
    )
}

Button.defaultProps ={
    type:'Button',
    variant:'Default',
    children:'Button',
    color:'gray'
}

Button.propTypes ={
    to:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired,
    color:PropTypes.string,
    type:PropTypes.oneOf(['Link','Button']),
    variant:PropTypes.oneOf(['Default','Link','Primary','Outline']),
    onClick:PropTypes.func.isRequired

}

export default Button
