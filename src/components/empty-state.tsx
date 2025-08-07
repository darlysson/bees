
type Props = {
  msg: string
}

export function EmptyState({ msg }: Props) {
  return (
    <div className='flex items-center justify-center h-full'>
      <p className='text-3xl'>{msg}</p>
    </div>
  )
}
