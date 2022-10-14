import React, { useState, useEffect } from "react"
import subjects from "../data/subjects"
import Header from "./Header"
import Entries from "./Entries"

const App = () => {
  const [allEntries, setAllEntries] = useState([])
  const [bySubjectEntries, setBySubjectEntries] = useState([])
  // const [byCategoryEntries, setByCategoryEntries] = useState([])

  // display ALL entries in alphabetical order

  // TODO: Divide all entries and categorize by subject
  const organizeEntriesBySubject = () => {
    bySubjectEntries.map(subject => {
      const subjectId = subject.id

      const subjectEntries = allEntries.filter(entry => entry.subject._id === subjectId)

      const updatedSubject = {
        ...subject,
        subjectEntries,
      }

      return updatedSubject
    })
  }

  organizeEntriesBySubject()
  // TODO: display ALL entries divided by Category (a list of category objects?)
  // in alphabetical order
  // const displayByCategory = () => {}

  useEffect(() => {
    // GET all entries
    fetch("http://localhost:5500/api/entries/all")
      .then(res => res.json())
      .then(data => {
        setAllEntries(data)
        setBySubjectEntries(subjects)
      })
      .catch(err => console.log(err.message))
  }, [])

  // console.log(bySubjectEntries)

  return (
    <div>
      <Header />
      <Entries entries={allEntries} />
    </div>
  )
}

export default App
