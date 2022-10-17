import React, { useState, useEffect } from "react"
import subjects from "../data/subjects"
import Header from "./Header"
import Search from "./Search"
import Entries from "./Entries"

const App = () => {
  const [allEntries, setAllEntries] = useState([])
  const [bySubjectEntries, setBySubjectEntries] = useState([])
  // const [byCategoryEntries, setByCategoryEntries] = useState([])

  // display ALL entries in alphabetical order

  // TODO: Divide all entries and categorize by subject
  const organizeEntries = (entries, listOfSubjects) => {
    const updatedSubjects = listOfSubjects.map(subject => {
      const subjectId = subject.id

      const subjectEntries = entries.filter(entry => entry.subject._id === subjectId)

      const updatedSubject = {
        ...subject,
        subjectEntries,
      }

      return updatedSubject
    })
    setAllEntries(entries)
    setBySubjectEntries(updatedSubjects)
  }

  useEffect(() => {
    // GET all entries
    fetch("http://localhost:5500/api/entries/all")
      .then(res => res.json())
      .then(data => {
        organizeEntries(data, subjects)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div>
      <Header />
      <Search />
      <Entries allEntries={allEntries} bySubjectEntries={bySubjectEntries} />
    </div>
  )
}

export default App
