import { ArrowCircleLeft } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { useUser } from '@/contexts/UserContext'

export function Header() {
  const { userName } = useUser()

  return (
    <header className="py-4 bg-bees-primary-yellow text-black">
      <nav className="max-w-[1500px] m-auto flex flex-row justify-between items-center">
        <Link to="/" className="font-normal text-3xl flex items-center gap-4">
          <ArrowCircleLeft size={48} weight="fill" />
          <span>Logout</span>
        </Link>

        <p className='font-normal text-3xl'>
          {`Hi, ${userName}`}
        </p>
      </nav>
    </header>
  )
}
