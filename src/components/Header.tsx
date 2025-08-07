import { ArrowCircleLeft } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="py-4 bg-[#F2EC54] text-black">
      <nav className="max-w-[1500px] m-auto flex flex-row justify-between items-center">
        <Link to="/" className="font-normal text-3xl flex items-center gap-4">
          <ArrowCircleLeft size={48} weight="fill" />
          <span>Logout</span>
        </Link>

        <p className='font-normal text-3xl'>Hi, Fulano</p>
      </nav>
    </header>
  )
}
