import { PlusCircle, Trash } from '@phosphor-icons/react'
import { Tag } from './tag'
import type { Brewery } from '@/hooks/useGetBreweries'

type Props = {
  brewery: Brewery
  isFavorite?: boolean
  onToggleFavorite?: (brewery: Brewery) => void
}

export function Card({ brewery, isFavorite = false, onToggleFavorite }: Props) {
  const { phone, postal_code, brewery_type, name, address_1: address, city, state, country } = brewery

  const handleToggleFavorite = () => {
    onToggleFavorite?.(brewery)
  }

  return (
    <div className="bg-white rounded-sm border py-6 px-4 relative min-h-[220px]">
      <div className="flex justify-between mb-6">
        <h3 className='font-bold text-xl truncate text-bees-gray-800'>{name}</h3>

        <button
          className='cursor-pointer ml-5'
          onClick={handleToggleFavorite}
        >
          {isFavorite ? (
            <Trash size={20} weight="regular" />
          ) : (
            <PlusCircle size={20} weight="regular" />
          )}
        </button>
      </div>
      <div className='mb-6'>
        <p className='font-normal text-base text-bees-gray-700'>{address ?? ""}</p>
        <p className='font-normal text-base text-bees-gray-700'>{`${city} - ${state} - ${country}`}</p>
      </div>
      <div className='flex gap-3 flex-wrap absolute bottom-6'>
        <Tag icon="chart" data={brewery_type} />
        <Tag icon="map" data={postal_code} />
        <Tag icon='phone' data={phone} />
      </div>
    </div>
  )
}
