import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='text-yellow-300 bg-amber-50'>Your favorite breweries</div>
  )
}
