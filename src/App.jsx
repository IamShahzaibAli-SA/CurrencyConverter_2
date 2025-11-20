import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
      <div className='w-[700px] p-5 bg-gray-500'>
        <h1 className='text-white text-[30px]'>Currency Converter</h1>

        <div>
          <p className='text-white text-[20px]'>Enter Amount</p>
          <input
            className='bg-white text-black pl-2'
            type="number"
            value={amount}
          />
        </div>

        <div>
          <p>Convert From</p>
          
        </div>

        <div>
          <p>Convert To</p>
          
        </div>

        <p className='text-white text-[20px]'>
          Converted Amount: 
        </p>
      </div>
    </div>
    </>
  )
}

export default App
