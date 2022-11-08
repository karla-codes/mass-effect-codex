import React, { useEffect, useState } from "react"
import Search from "./Search"
import EntryCard from "./EntryCard"

const Entries = props => {
  const [selectionValue, setSelectionValue] = useState("")
  const [currentEntries, setCurrentEntries] = useState([])

  const entries = props.allEntries
  const { subjects } = props

  const setEntryOrder = option => {
    if (option === "all-atoz") {
      // display ALL entries in alphabetical order
      const sortedAtoZ = entries.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }

        if (a.title > b.title) {
          return 1
        }

        return 0
      })

      setCurrentEntries(sortedAtoZ)
      return sortedAtoZ
    } else if (option === "all-ztoa") {
      // display ALL entries in reverse alphabetical order
      const sortedZtoA = entries.sort((a, b) => {
        if (a.title > b.title) {
          return -1
        }

        if (a.title < b.title) {
          return 1
        }

        return 0
      })

      setCurrentEntries(sortedZtoA)
      return sortedZtoA
    } else if (option === "category-first" || option === "category-last") {
      // display all entries by Category (first - last)
      const primaryEntries = []
      const secondaryEntries = []

      entries.forEach(entry => {
        if (entry.category.name === "Primary") {
          primaryEntries.push(entry)
        } else if (entry.category.name === "Secondary") {
          secondaryEntries.push(entry)
        }
      })

      if (option === "category-first") {
        const sortedCategoryFirst = [primaryEntries, secondaryEntries]

        sortedCategoryFirst.forEach(category => {
          category.sort((a, b) => {
            if (a.title < b.title) {
              return -1
            }
            if (a.title > b.title) {
              return 1
            }

            return 0
          })
        })

        setCurrentEntries(sortedCategoryFirst)
        return sortedCategoryFirst
      } else {
        const sortedCategoryLast = [secondaryEntries, primaryEntries]

        sortedCategoryLast.forEach(category => {
          category.sort((a, b) => {
            if (a.title < b.title) {
              return -1
            }
            if (a.title > b.title) {
              return 1
            }

            return 0
          })
        })

        setCurrentEntries(sortedCategoryLast)
        return sortedCategoryLast
      }
    } else if (option === "subject-atoz") {
      // display all entries by Subject (a - z)
      subjects.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }

        if (a.name > b.name) {
          return 1
        }

        return 0
      })

      setCurrentEntries(subjects)
      return subjects
    } else if (option === "subject-ztoa") {
      // display all entries by Subject (z - a)
      subjects.sort((a, b) => {
        if (a.name > b.name) {
          return -1
        }

        if (a.name < b.name) {
          return 1
        }

        return 0
      })

      setCurrentEntries(subjects)
      return subjects
    }
  }

  const handleOptionSelect = e => {
    const selectValue = e.target.value
    setSelectionValue(selectValue)
    const entries = setEntryOrder(selectValue)

    // save selection and current entries to session storage
    sessionStorage.setItem("selectionValue", JSON.stringify(selectValue))
    sessionStorage.setItem("updatedEntries", JSON.stringify(entries))
  }

  useEffect(() => {
    const currentEntries = sessionStorage.getItem("updatedEntries")
    const currentSelectionValue = sessionStorage.getItem("selectionValue")
    if (currentEntries && currentSelectionValue) {
      setCurrentEntries(JSON.parse(currentEntries))
      setSelectionValue(JSON.parse(currentSelectionValue))
    }
  }, [])

  return (
    <main>
      <Search />
      <div className="codex">
        <div className="sort-select">
          <label htmlFor="sort-select">Sort By</label>
          <div className="select">
            <select id="sort-select" value={selectionValue} onChange={handleOptionSelect}>
              <option value={"all-atoz"}>All (a - z)</option>
              <option value={"all-ztoa"}>All (z - a)</option>
              <option value={"category-first"}>Category (First)</option>
              <option value={"category-last"}>Category (Last)</option>
              <option value={"subject-atoz"}>Subject (a - z)</option>
              <option value={"subject-ztoa"}>Subject (z - a)</option>
            </select>
          </div>
        </div>
        <article>
          <EntryCard
            entries={entries}
            updatedEntries={currentEntries}
            selectionValue={selectionValue}
          />
        </article>
      </div>
    </main>
  )
}

export default Entries
