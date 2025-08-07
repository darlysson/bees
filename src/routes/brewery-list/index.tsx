import { CardsList } from '@/components/cards-list'
// import { EmptyState } from '@/components/empty-state'
import { Header } from '@/components/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brewery-list/')({
  component: BreweryList,
})

function BreweryList() {
  return (
    <>
      <Header />
      <div className='max-w-[1500px] m-auto h-screen py-14 flex flex-col bg-[#FFFAF2]'>
        <section className='border-b h-full'>
          <h3 className='font-semibold text-5xl'>You favorite breweries</h3>
          {/* <EmptyState msg="You don't have any favorite brewery :(" /> */}

          <CardsList />
        </section>

        <section className='h-full pt-14'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-5xl'>You favorite breweries</h3>

            <div className="flex gap-2">
              <label htmlFor="full-name" className='block w-[300px]'>
                <input placeholder='Find for your new favorite brewery' name='full-name' className='border  border-gray-300 bg-white px-3 py-2.5 w-full rounded-sm' />
              </label>

              <button className='bg-black px-4 py-2 text-yellow-300 rounded-sm cursor-pointer text-sm'>Enter</button>
            </div>
          </div>

          {/* <EmptyState msg='Search for a brewery to see the results' /> */}
          <CardsList />
        </section>
      </div>
    </>
  )
}
