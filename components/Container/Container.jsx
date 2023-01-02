import React from 'react';
import { ContainerStyles } from './Container.styles.jsx';

const Container = ({ children, className, ...rest }) => {
  let containerStyles = ContainerStyles
  if(className) {
    containerStyles = `${containerStyles} ${className}`
  }

  return (
    <ContainerStyles className={containerStyles} {...rest}>
      {children}
    </ContainerStyles>
  )
}

export default Container;