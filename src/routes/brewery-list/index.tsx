import Header from '@/components/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brewery-list/')({
  component: BreweryList,
})

function BreweryList() {
  return (
    <>
      <Header />
      <div>list page</div>
    </>
  )
}
