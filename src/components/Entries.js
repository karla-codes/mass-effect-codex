import React from "react"

const Entries = props => {
  const entries = props.allEntries
  // props.organizeEntriesBySubject(entries)

  return (
    <main>
      This is where all of the entries will exist.
      <div className="container">
        <div className="sort-select">
          {/* TODO: This is where the 'sort by' selector will go */}
          <label htmlFor="sort-select">Sort By</label>
          <select id="sort-select">
            <option value={"atoz"}>A - Z</option>
            <option value={"ztoa"}>Z - A</option>
            <option value={"subject"}>Subject (A - Z)</option>
          </select>
        </div>
        <div className="entry-cards">
          {entries.map(entry => {
            return (
              <div key={entry._id}>
                <h2>{entry.title}</h2>
                {/* <div>{entry.content.map(item => item)}</div> */}
                <p>
                  {entry.subject.name} | {entry.category.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Entries
