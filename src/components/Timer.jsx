import { useEffect, useState } from "react"

export const Timer = ({ date, onCloseTimer }) => {
  const [minute, setMinute] = useState(1)
  const [second, setSecond] = useState(date.getSeconds())
  let interval
  let state="active"

  useEffect(() => {
    interval = setInterval(() => {
      if (second === 0 && minute === 0) {
        onCloseTimer()
      }

      if (second === 0) {
        setSecond(59)
        setMinute(minute - 1)
      } else {
        setSecond(second - 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [second])

  const handlePause = () => {
    if(state!='paused'){
    clearInterval(interval)
    state='paused'
    }
  }

  const handleContinue = () => {
    if(state!='active'){
      setSecond(second - 1)
      state='active'
    }
  }

  return (
    <div className="max-w-sm w-full bg-gray-800 shadow-lg rounded-xl p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center text-indigo-300">
        {Math.floor(minute / 10) ? minute : "0" + minute}:
        {Math.floor(second / 10) ? second : "0" + second}
      </h1>

      <div className="flex justify-between">
        <button
          onClick={handlePause}
          className="bg-yellow-500 text-black py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
        >
          Pause
        </button>
        <button
          onClick={handleContinue}
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-200"
        >
          Continue
        </button>
        <button
          onClick={onCloseTimer}
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
