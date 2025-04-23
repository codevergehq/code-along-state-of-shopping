import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">State of Shopping</h1>
      </div>
    </>
  )
}

export default App
