function Hello() {
  const currentYear = new Date().getFullYear()
  const name = "Alex"

  return (
    <div>
      <h2>I am a new component!</h2>
      <h1 className="title">Welcome, {name}!</h1>
      <h2>The current year is {currentYear}</h2>
    </div>
  )
}

export default Hello