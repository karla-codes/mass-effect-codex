import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import subjects from "../data/subjects"
import Home from "./Home"
import EntryPage from "./EntryPage"

const App = () => {
  const [allEntries, setAllEntries] = useState([])
  const [bySubjectEntries, setBySubjectEntries] = useState([])

  // Divide all entries and categorize by subject
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
    fetch(`${process.env.REACT_APP_API_URL}/api/entries/all`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const sortedData = data.sort((a, b) => {
          if (a.title < b.title) {
            return -1
          }

          if (a.title > b.title) {
            return 1
          }

          return 0
        })
        organizeEntries(sortedData, subjects)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home allEntries={allEntries} subjects={bySubjectEntries} />} />
      <Route path="entries/:entryId" element={<EntryPage />} />
    </Routes>
  )
}

export default App
