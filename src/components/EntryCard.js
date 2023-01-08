/* eslint-disable no-lone-blocks */
import React from "react"
import { Link } from "react-router-dom"

const EntryCard = props => {
  const { entries } = props
  const { updatedEntries } = props
  const { selectionValue } = props

  const createCard = () => {
    if (updatedEntries.length === 0) {
      return (
        <div className="codex-entries">
          {entries.map(entry => {
            const entryId = entry._id

            const entryLink = `/entries/${entryId}`
            return (
              <Link
                to={entryLink}
                state={{ entry: entry }}
                className="codex-entry"
                id={entryId}
                key={entryId}
                onClick={() => {
                  sessionStorage.setItem("updatedEntries", JSON.stringify(entries))
                  sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                }}
              >
                <h2>{entry.title}</h2>
                <p>
                  {entry.subject.name} | {entry.category.name}
                </p>
              </Link>
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
                  const entryId = entry._id
                  const entryLink = `/entries/${entryId}`
                  return (
                    <Link
                      to={entryLink}
                      state={{ entry: entry }}
                      className="codex-entry"
                      id={entryId}
                      key={entryId}
                      onClick={() => {
                        sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                        sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                      }}
                    >
                      <h2>{entry.title}</h2>
                      <p>
                        {entry.subject.name} | {entry.category.name}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="codex-secondary">
              <h2 className="titles">Secondary</h2>
              <div className="codex-entries">
                {secondary.map(entry => {
                  const entryId = entry._id
                  const entryLink = `/entries/${entryId}`
                  return (
                    <Link
                      to={entryLink}
                      state={{ entry: entry }}
                      className="codex-entry"
                      id={entryId}
                      key={entryId}
                      onClick={() => {
                        sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                        sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                      }}
                    >
                      <h2>{entry.title}</h2>
                      <p>
                        {entry.subject.name} | {entry.category.name}
                      </p>
                    </Link>
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
                  const entryId = entry._id
                  const entryLink = `/entries/${entryId}`
                  return (
                    <Link
                      to={entryLink}
                      state={{ entry: entry }}
                      className="codex-entry"
                      id={entryId}
                      key={entryId}
                      onClick={() => {
                        sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                        sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                      }}
                    >
                      <h2>{entry.title}</h2>
                      <p>
                        {entry.subject.name} | {entry.category.name}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>
            <section className="codex-primary">
              <h2 className="titles">Primary</h2>
              <div className="codex-entries">
                {primary.map(entry => {
                  const entryId = entry._id
                  const entryLink = `/entries/${entryId}`
                  return (
                    <Link
                      to={entryLink}
                      state={{ entry: entry }}
                      className="codex-entry"
                      id={entryId}
                      key={entryId}
                      onClick={() => {
                        sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                        sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                      }}
                    >
                      <h2>{entry.title}</h2>
                      <p>
                        {entry.subject.name} | {entry.category.name}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </section>
          </>
        )
      }
    } else if (updatedEntries.length === 15) {
      // TODO: change SUBJECT (z - a ) sort to SUBJECT (Category)
      return updatedEntries.map(subject => {
        const { name } = subject
        const entries = subject.subjectEntries
        // console.log(entries)
        return (
          <div className="codex-subject" data-subject-name={name} key={name}>
            <h2 className="titles">{name}</h2>
            <div className="codex-entries">
              {entries.map(entry => {
                const entryId = entry._id
                const entryLink = `/entries/${entryId}`
                return (
                  <Link
                    to={entryLink}
                    state={{ entry: entry }}
                    className="codex-entry"
                    id={entryId}
                    key={entryId}
                    onClick={() => {
                      sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                      sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                    }}
                  >
                    <h2>{entry.title}</h2>
                    <p>
                      {entry.subject.name} | {entry.category.name}
                    </p>
                  </Link>
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
            const entryId = entry._id
            const entryLink = `/entries/${entryId}`
            return (
              <Link
                to={entryLink}
                state={{ entry: entry }}
                className="codex-entry"
                id={entryId}
                key={entryId}
                onClick={() => {
                  sessionStorage.setItem("updatedEntries", JSON.stringify(updatedEntries))
                  sessionStorage.setItem("selectionValue", JSON.stringify(selectionValue))
                }}
              >
                <h2>{entry.title}</h2>
                <p>
                  {entry.subject.name} | {entry.category.name}
                </p>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  return createCard()
}

export default EntryCard
