import { useState } from 'react'
import image from "./img/Akatsuki.jpg";

function App() {
  const [count, setCount] = useState(0)

  const [showImage, setShowImage] = useState(false)

  return (
    <>
      <h1>Sample Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => setShowImage(true)}>Show Picture</button>
        <br />
        <button onClick={() => setShowImage(false)}>Close Picture</button>
        <br />
        {showImage && (
          <img
            src={image}
            alt="Sample"
            style={{ marginTop: "10px", maxWidth: "100%" }}
          />
        )}
      </div>
    </>
  )
}

export default App
