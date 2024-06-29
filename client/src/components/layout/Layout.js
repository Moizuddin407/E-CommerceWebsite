import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

// Working of props:
// Whenever data from parent file i.e. App.js in this case,
// Changes data, As it is in <Layout> </Layout> tag, it will
// Dynamically update value.

const Layout = (props) => {
  return (
    <div>
        <Header/>
          <main style={{minHeight:'80vh'}}>
            {props.children}
          </main>
        <Footer/>
    </div>
  )
}

export default Layout