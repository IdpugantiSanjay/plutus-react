import styles from './Card.module.scss'

const deleteButton = (
  <div className={'text-pink-500 border-2 p-1 bg-gray-200 absolute' + styles.deleteButton}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <title> Delete Transaction </title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  </div>
)

export function Card() {
  return (
    <div className="relative">
      <div className="items-center flex gap-3 relative overflow-hidden">
        <div className="flex flex-col basis-8">
          <div className="text-xs opacity-60">May</div>
          <div className="opacity-60">21</div>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="truncate">SALARY FOR THE MONTH OF MAY</div>
          <div className="text-xs opacity-60">Salary</div>
        </div>
        <div className="text-xl shrink-0">1,14,000</div>
      </div>
    </div>
  )
}
