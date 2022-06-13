import React from 'react'

const Toast = ({ msg , handleshow , bgColor }) => {
  return (
    <>  
    <div className = {`${bgColor}`}>{msg}</div>
    {/* <div className={`toast show position-fixed text-light ${bgColor}`} style={{top :'5px',right : '5px', minWidth : '200px', zIndex : 50}}>
        <div className={`toast-header text-light ${bgColor}`}>
        <strong className='mr-auto text-light'>{msg}</strong>
        <button className='ml-2 mb-1 close text-light' 
        onClick={handleshow}
        data-dismiss = "toast" style={{outline : 'none'}} >&times;</button>
        </div>
        <div className='toast-body'>
        {/* {msg.body} */}
        {/* </div> */}
    {/* </div> */} 
    </>
  )
}

export default Toast