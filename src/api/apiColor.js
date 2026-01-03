async function getColors() {
  const res = await fetch("https://www.thecolorapi.com/scheme?hex=984848&mode=analogic")
  const data = await res.json()
  console.log(data)
}
getColors()

