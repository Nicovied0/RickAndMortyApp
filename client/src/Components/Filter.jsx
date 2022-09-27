import React from 'react'

const Filter = () => {
  return (
    <div>
        <select>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
        <select>
          <option value="all">All</option>
          <option value="api">Api</option>
          <option value="db">Db</option>
        </select>
      </div>
  )
}

export default Filter