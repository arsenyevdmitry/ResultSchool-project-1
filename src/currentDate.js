import React from "react"

const CurrentDate = () => {
  const today = new Date()
  const date = today.toLocaleDateString()

  return (
    <div>
      <p>Текущая дата: {date}</p>
    </div>
  )
}

export default CurrentDate
