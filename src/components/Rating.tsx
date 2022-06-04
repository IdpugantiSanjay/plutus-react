import { useEffect, useState } from 'react'

export type RatingProps = {
  count: number
  starSize: number
  onRated: (rating: number) => void
}

export type StarProps = {
  size: number
  fill: boolean
  onClick: () => void
}

export function Star({ size, fill, onClick }: StarProps) {
  return (
    <svg
      tabIndex={0}
      className={
        'cursor-pointer outline-none focus:border-amber-600 star mr-2 ' + (fill ? 'fill-amber-300' : 'fill-gray-300')
      }
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
    </svg>
  )
}

export function Rating({ count, starSize, onRated, ..._props }: RatingProps) {
  const [rating, setRating] = useState(0)
  const [stars] = useState<boolean[]>(Array(count).fill(false))

  useEffect(() => {
    onRated(rating)
  }, [rating])

  return (
    <span className={'flex'}>
      {stars.map((_, i) => {
        return <Star fill={rating > i} size={starSize} onClick={() => setRating(i + 1)} key={i} />
      })}
    </span>
  )
}
