import React from "react"

const EntryCard = props => {
  const { entries } = props
  const { updatedEntries } = props

  // console.log(entries)

  const createCard = () => {
    if (updatedEntries.length === 0) {
      return entries.map(entry => {
        return (
          <div key={entry._id}>
            <h2>{entry.title}</h2>
            {/* <div>{entry.content.map(item => item)}</div> */}
            <p>
              {entry.subject.name} | {entry.category.name}
            </p>
          </div>
        )
      })
    } else if (updatedEntries.length === 2) {
      if (updatedEntries[0][0].category.name === "Primary") {
        const primary = updatedEntries[0]
        const secondary = updatedEntries[1]

        return (
          <>
            <section className="primary">
              <h2>Primary</h2>
              <div className="cards">
                {primary.map(entry => {
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
            </section>

            <section className="secondary">
              <h2>Secondary</h2>
              <div className="cards">
                {secondary.map(entry => {
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
            </section>
          </>
        )
      } else {
        const secondary = updatedEntries[0]
        const primary = updatedEntries[1]

        return (
          <>
            <section className="secondary">
              <h2>Secondary</h2>
              <div className="cards">
                {secondary.map(entry => {
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
            </section>
            <section className="primary">
              <h2>Primary</h2>
              <div className="cards">
                {primary.map(entry => {
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
            </section>
          </>
        )
      }
    } else if (updatedEntries.length === 15) {
      console.log(updatedEntries)

      return updatedEntries.map(subject => {
        const { name } = subject
        const entries = subject.subjectEntries
        // console.log(entries)
        return (
          <section key={subject.id}>
            <h2>{name}</h2>
            <div>
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
          </section>
        )
      })
    } else {
      return updatedEntries.map(entry => {
        return (
          <div key={entry._id}>
            <h2>{entry.title}</h2>
            {/* <div>{entry.content.map(item => item)}</div> */}
            <p>
              {entry.subject.name} | {entry.category.name}
            </p>
          </div>
        )
      })
    }
  }

  return createCard()
}

export default EntryCard
