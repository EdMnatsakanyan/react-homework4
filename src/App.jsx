import { useState } from 'react'
import { Timer } from './components/Timer'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  let date = new Date()

  const handleStart = () => {
    setIsOpened(true)
    date = new Date()
  }

  const closeTimer = () => {
    setIsOpened(null)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <button
        onClick={handleStart}
        className="bg-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
      >
        Start Timer
      </button>

      {isOpened && (
        <Timer date={date} onCloseTimer={closeTimer} />
      )}
    </div>
  )
}

export default App
