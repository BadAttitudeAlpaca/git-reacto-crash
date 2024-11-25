// git_token = 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
// git remote set-url origin https://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@github.com/BadAttitudeAlpaca/git-reacto-crash
// git add .
// git commit -m 'base initial commit'
// git push -u origin master

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
