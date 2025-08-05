import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="bg-[#F2EC54] h-screen flex flex-col items-center justify-center relative">
      <p className='font-normal text-sm mb-4'>Please, enter your full name below</p>
      <p className='font-normal text-sm mb-4'>Only alphabetical characters are accepted</p>

      <label htmlFor="full-name" className='block mb-4 w-[300px]'>
        <input placeholder='Your full name' name='full-name' className='border  border-gray-300 bg-white px-3 py-2.5 w-full rounded-sm' />
      </label>

      <label htmlFor="age" className='flex gap-2 mb-6 font-normal text-sm'>
        <input type="checkbox" name="age" />
        Are you older than 18 years old?
      </label>

      <div className="flex items-center justify-center">
        <button className='bg-slate-600 px-4 py-2 text-white rounded-sm cursor-pointer text-sm'>Enter</button>
      </div>

      <div className='absolute bottom-4 left-7'>
        <img src="/bee.svg" alt="" />
      </div>
    </div>
  )
}
