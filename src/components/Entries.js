import React from "react"

const Entries = props => {
  const entries = props.entries

  return (
    <main>
      This is where all of the entries will exist.
      <div className="entry-cards">
        {entries.map(entry => {
          return (
            <div key={entry._id}>
              <h2>{entry.title}</h2>
              <p>
                {entry.subject.name} | {entry.category.name}
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Entries
