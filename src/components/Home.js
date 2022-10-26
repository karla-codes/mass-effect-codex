import React from "react"
import Header from "./Header"
import Entries from "./Entries"

const Home = props => {
  return (
    <div className="wrapper">
      <Header />
      <Entries {...props} />
    </div>
  )
}

export default Home
