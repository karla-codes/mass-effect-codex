import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const EntryPage = () => {
  const location = useLocation()
  const currentEntry = location.state?.entry
  const entryContent = currentEntry.content
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wrapper">
      <nav className="entry-nav">
        <ul>
          <li>
            <button onClick={() => navigate(-1)}>Back to Entries</button>
          </li>
          <li>
            <button>Random Entry</button>
          </li>
        </ul>
      </nav>
      <div className="entry-container">
        <header id="entry-page">
          <h1>{currentEntry.title}</h1>
          <p>
            {currentEntry.subject.name} | {currentEntry.category.name}
          </p>
        </header>
        <main>
          <article className="entry-info">
            {entryContent.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </article>
        </main>
      </div>
    </div>
  )
}

export default EntryPage
