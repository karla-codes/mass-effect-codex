import React from "react"

const Header = () => {
  return (
    <header id="main">
      <h1 className="title">Mass Effect Codex</h1>
      <p>
        Welcome to the (unofficial) Mass Effect Codex. Here you’ll find codex entries from all three
        Mass Effect games (minus the entries from the DLCs).
      </p>
      <p>
        All codex entries are placed into one of two categories: <span>Primary</span> and{" "}
        <span>Secondary</span>. Primary entries define different areas of interest that are key to
        the storyline of Mass Effect. Secondary entries dive deeper into areas that are defined in
        the Primary entries.
      </p>
      <p>
        Created by <a href="https://github.com/karla-codes">Karla Walker</a>. Check out the source
        code <a href="https://github.com/karla-codes/mass-effect-codex">here</a>.
      </p>
      <p>
        <strong>Sources:</strong>{" "}
        <a href="https://masseffect.fandom.com/wiki/Codex">Mass Effect Wiki</a> |{" "}
        <a href="https://n7hq.masseffect.com/codex/">N7 HQ</a>
      </p>
    </header>
  )
}

export default Header
