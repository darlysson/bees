import { Trash } from '@phosphor-icons/react'
import { Tag } from './tag'

type Props = {
  phone: string;
  postalCode: string;
  breweryType: string
  name: string
  address: string | null
  city: string
  state: string
  country: string
}

export function Card({ phone, postalCode, breweryType, name, address, city, state, country }: Props) {
  return (
    <div className="bg-white rounded-sm border py-6 px-4 relative min-h-[220px]">
      <div className="flex justify-between mb-6">
        <h3 className='font-bold text-xl'>{name}</h3>

        <button className='cursor-pointer' onClick={() => console.log("test")}>
          <Trash size={20} weight="fill" />
          {/* <PlusCircle size={20} weight="fill"  /> */}
        </button>
      </div>
      <div className='mb-6'>
        <p className='font-normal text-base text-[#3F3F46]'>{address ?? ""}</p>
        <p className='font-normal text-base text-[#3F3F46]'>{`${city} - ${state} - ${country}`}</p>
      </div>
      <div className='flex gap-3 flex-wrap absolute bottom-6'>
        <Tag icon="chart" data={breweryType} />
        <Tag icon="map" data={postalCode} />
        <Tag icon='phone' data={phone} />
      </div>
    </div>
  )
}
