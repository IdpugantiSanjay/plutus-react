import { Icon } from '../components/Icons'

export function Overview() {
  return (
    <div>
      <div className="main">
        <div className="container m-auto rounded-md bg-white shadow-md mt-8">
          <div className="flex justify-between content-center p-4">
            <div className="font-medium cursor-pointer">Recent transactions</div>
            <div>
              <button className="font-medium text-teal-700 hover:underline">See all</button>
            </div>
          </div>
          <div className="transaction">
            <div className="separator"></div>

            <div className="flex p-5 relative item">
              <div className="self-center justify-self-center mr-2">
                <div className="bg-teal-100 rounded-full p-2 text-teal-700">
                  <Icon name={'Salary'}></Icon>
                </div>
              </div>

              <div className="flex-1 ml-2 min-w-0">
                <div className="text-base font-medium mb-2 truncate">What now ?</div>
                <div className="text-sm opacity-60">Salary</div>
              </div>

              <div className="basis-24 flex flex-col">
                <div className="font-bold mb-2 self-end">1,20,000</div>
                <div className="text-sm opacity-60 self-end">May 31, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto rounded-md bg-white shadow-md mt-8">
        <div className="flex justify-between content-center p-4">
          <div className="font-medium cursor-pointer"> Bills and subscriptions</div>
          <div className="text-teal-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div className="text-3xl font-bold pl-4 py-2">₹2,00,000</div>
        <div>
          <div className="separator"></div>
          <div className="flex items-center p-4 item">
            <div className="min-w-min text-sm opacity-60 flex flex-col items-center justify-center basis-12">
              <div>Jun</div>
              <div>6</div>
            </div>
            <div className="font-medium justify-self-start flex-1 ml-4 flex flex-col gap-1">
              <span>Amazon</span>
              {/*<span*/}
              {/*  className="text-2xs font-bold text-teal-600"*/}
              {/*  title="Auto Pay*/}
              {/*      Transaction"*/}
              {/*>*/}
              {/*  AUTO*/}
              {/*</span>*/}
              <span
                className="text-2xs font-bold text-sky-600 cursor-pointer hover:underline"
                title="Auto Pay Transaction"
              >
                MARK AS PAID
              </span>
            </div>
            <div className="font-bold">₹20,000</div>
          </div>
        </div>
      </div>
    </div>
  )
}
