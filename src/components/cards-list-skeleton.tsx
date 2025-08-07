export function CardsListSkeleton() {
  return (
    <div className='grid grid-cols-3 gap-8 pt-10 pb-14 pl-8'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="bg-white rounded-sm border py-6 px-4 relative min-h-[220px] animate-pulse">
          <div className="flex justify-between mb-6">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-5 bg-gray-200 rounded w-5"></div>
          </div>
          <div className='mb-6'>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div className='flex gap-3 flex-wrap absolute bottom-6'>
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-20"></div>
            <div className="h-6 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
