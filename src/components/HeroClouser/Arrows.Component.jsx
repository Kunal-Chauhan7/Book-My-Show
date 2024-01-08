import React from 'react'

export const NextArrow = (props) => {
  return (
    <>
    <div 
        className={props.className} 
        style={{...props}} 
        onClick={props.onClick}/>
    </> 
  )
}

export const PrevArrow = (props) => {
    <>
    <div 
        className={props.className} 
        style={{...props}} 
        onClick={props.onClick}
      />
    </>
  }