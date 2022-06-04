import { TransactionForm } from './TransactionForm'

export function CreateTransaction() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
        Enter your Income/Expenses
      </h2>

      <div className={'bg-white py-8 px-6 shadow rounded-lg'}>
        <TransactionForm></TransactionForm>
      </div>
    </div>
  )
}
