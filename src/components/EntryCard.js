import React from "react"

const EntryCard = props => {
  const { entries } = props
  const { updatedEntries } = props

  const createCard = () => {
    if (updatedEntries.length === 0) {
      return (
        <div className="codex-entries">
          {entries.map(entry => {
            return (
              <div key={entry._id} className="codex-entry">
                <h2>{entry.title}</h2>
                {/* <div>{entry.content.map(item => item)}</div> */}
                <p>
                  {entry.subject.name} | {entry.category.name}
                </p>
              </div>
            )
          })}
        </div>
      )
    } else if (updatedEntries.length === 2) {
      if (updatedEntries[0][0].category.name === "Primary") {
        const primary = updatedEntries[0]
        const secondary = updatedEntries[1]

        return (
          <>
            <section className="codex-primary">
              <h2 className="titles">Primary</h2>
              <div className="codex-entries">
                {primary.map(entry => {
                  return (
                    <div key={entry._id} className="codex-entry">
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

            <section className="codex-secondary">
              <h2 className="titles">Secondary</h2>
              <div className="codex-entries">
                {secondary.map(entry => {
                  return (
                    <div key={entry._id} className="codex-entry">
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
            <section className="codex-secondary">
              <h2 className="titles">Secondary</h2>
              <div className="codex-entries">
                {secondary.map(entry => {
                  return (
                    <div key={entry._id} className="codex-entry">
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
            <section className="codex-primary">
              <h2 className="titles">Primary</h2>
              <div className="codex-entries">
                {primary.map(entry => {
                  return (
                    <div key={entry._id} className="codex-entry">
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
          <div className="codex-subject">
            <h2 className="titles">{name}</h2>
            <div className="codex-entries">
              {entries.map(entry => {
                return (
                  <div key={entry._id} className="codex-entry" data-name={entry.title}>
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
        )
      })
    } else {
      return (
        <div className="codex-entries">
          {updatedEntries.map(entry => {
            return (
              <div key={entry._id} className="codex-entry">
                <h2>{entry.title}</h2>
                {/* <div>{entry.content.map(item => item)}</div> */}
                <p>
                  {entry.subject.name} | {entry.category.name}
                </p>
              </div>
            )
          })}
        </div>
      )
    }
  }

  return createCard()
}

export default EntryCard
