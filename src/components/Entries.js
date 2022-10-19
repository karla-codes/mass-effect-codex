import React, { useState } from "react"
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
    }
  }

  const handleOptionSelect = e => {
    const selectValue = e.target.value
    setSelectionValue(selectValue)
    setEntryOrder(selectValue)
    // console.log(selectValue)
  }

  return (
    <main>
      This is where all of the entries will exist.
      <div className="wrapper">
        <div className="sort-select">
          {/* TODO: This is where the 'sort by' selector will go */}
          <label htmlFor="sort-select">Sort By</label>
          <select id="sort-select" value={selectionValue} onChange={handleOptionSelect}>
            <option value={"all-atoz"}>All (a - z)</option>
            <option value={"all-ztoa"}>All (z - a)</option>
            <option value={"category-first"}>Category (First)</option>
            <option value={"category-last"}>Category (Last)</option>
            <option value={"subject-atoz"}>Subject (a - z)</option>
            <option value={"subject-ztoa"}>Subject (z - a)</option>
          </select>
        </div>
        <article className="entries">
          <EntryCard entries={entries} updatedEntries={currentEntries} />
        </article>
      </div>
    </main>
  )
}

export default Entries
