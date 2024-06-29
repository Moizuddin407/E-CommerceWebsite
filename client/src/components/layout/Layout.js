import React from 'react'

const Layout = (props) => {
  return (
    <div>
         <h1>Layout</h1>
         {/* To show anything placed between the tags
         on App.js */}
         {props.children}
    </div>
  )
}

export default Layout