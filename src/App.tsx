import { Route, Routes } from 'react-router-dom'

import { Overview } from './Overview/Overview'
import { CreateTransaction } from './Transactions/Create/CreateTransaction'

function App() {
  return (
    <div className={'w-full mt-2 p-2 px-4'}>
      <Routes>
        <Route path="/transactions/new" element={<CreateTransaction />}></Route>
        <Route path="/" element={<Overview />}></Route>
      </Routes>
    </div>
  )
}

export default App
