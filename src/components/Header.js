import React from "react"

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>Mass Effect Codex</h1>
        <p>
          Welcome to my Mass Effect Codex project! Here you’ll find codex entries from all three
          Mass Effect games (minus the entries from the DLCs).
        </p>
        <p>
          All codex entries are placed into one of two categories: Primary and Secondary.
          **Primary** entries consists of blank subcategories that define different areas of
          interest that are key to the storyline of Mass Effect. **Secondary** entries consist of
          blank subcategories that dive deeper into areas that are defined in the Primary entries.
        </p>
      </div>
    </header>
  )
}

export default Header
