import React from 'react'



const MyHeader = ({MyStyle, children}) =>{
    return(
        <h1 style={{ color: MyStyle}}>{children}</h1>
    )
}

export default MyHeader
