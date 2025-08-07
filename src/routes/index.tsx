import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useUser } from '@/contexts/UserContext'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [fullName, setFullName] = useState('')
  const [isOver18, setIsOver18] = useState(false)
  const { handleSetUserName } = useUser()

  const hasValidFullName = fullName.trim().split(' ').filter(word => word.length > 0).length >= 2
  const isFormValid = hasValidFullName && isOver18

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOver18(e.target.checked)
  }

  return (
    <div className="bg-[#F2EC54] h-screen flex flex-col items-center justify-center relative">
      <p className='font-normal text-sm mb-4'>Please, enter your full name below</p>
      <p className='font-normal text-sm mb-4'>Only alphabetical characters are accepted</p>

      <label htmlFor="full-name" className='block mb-4 w-[300px]'>
        <input
          placeholder='Your full name'
          name='full-name'
          className='border border-gray-300 bg-white px-3 py-2.5 w-full rounded-sm'
          value={fullName}
          onChange={handleNameChange}
        />
      </label>

      {fullName && !hasValidFullName && (
        <p className='text-red-500 text-xs mb-2'>Please enter both your first name and last name</p>
      )}

      <label htmlFor="age" className='flex gap-2 mb-6 font-normal text-sm'>
        <input
          type="checkbox"
          name="age"
          checked={isOver18}
          onChange={handleAgeChange}
        />
        Are you older than 18 years old?
      </label>

      <div className="flex items-center justify-center">
        <Link
          className={`px-4 py-2 text-white rounded-sm text-sm  ${isFormValid ? 'bg-black' : "bg-gray-600 pointer-events-none"}`}
          to="/brewery-list"
          onClick={() => handleSetUserName(fullName.split(' ')[0])}
        >
          Enter
        </Link>
      </div>

      <div className='absolute bottom-4 left-7'>
        <img src="/bee.svg" alt="" />
      </div>
    </div>
  )
}
