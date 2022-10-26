import React from "react"
import { useLocation } from "react-router-dom"

const EntryPage = () => {
  const location = useLocation()
  const currentEntry = location.state?.entry
  const entryContent = currentEntry.content

  return (
    <main>
      <article className="codex-entry__info">
        <header>
          <nav>
            <ul>
              <li>{/* <a href="">Previous Entry</a> */}</li>
              <li>{/* <a href="">Next Entry</a> */}</li>
            </ul>
          </nav>
          <h1>{currentEntry.title}</h1>
          <p>
            {currentEntry.subject.name} | {currentEntry.category.name}
          </p>
        </header>
        <div>
          {entryContent.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </article>
    </main>
  )
}

export default EntryPage
