import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import React, { FormEvent, Fragment, useEffect, useState } from 'react'

import { PrimaryButton } from '../../components/buttons/PrimaryButton'
import { Categories } from '../../models/Category'
import type { TransactionForm as TransactionFormType } from '../../models/Transaction'

export const getRoundedMinutes = (date: Date): string => {
  const minutes = date.getMinutes()
  const rounded = Math.round(minutes / 15) * 15
  return (rounded == 60 ? '00' : rounded).toString().padStart(2, '0')
}

type onFormChange<T extends {}> = <K extends keyof T, V extends T[K]>(name: K, value: V) => void

const DEFAULT_FORM_STATE: TransactionFormType = {
  description: '',
  date: new Date().toLocaleDateString('en-CA').toString(),
  time: `${new Date().getHours().toString().padStart(2, '0')}:${getRoundedMinutes(new Date())}`,
  amount: 0,
  category: 'Food Delivery',
} as const

export function TransactionForm() {
  const [form, setForm] = useState<TransactionFormType>(DEFAULT_FORM_STATE)
  const [submitButtonName, setSubmitButtonName] = useState<'Save' | 'Next'>('Save')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const onFormChange: onFormChange<TransactionFormType> = (key, value) => {
    setForm({ ...form, [key]: value })
  }

  useEffect(() => {
    setSubmitButtonName('Next')
  }, [form.category === 'Food Delivery'])

  return (
    <form className="mb-0 text-sm" onSubmit={(event) => onSubmit(event)}>
      <fieldset className="space-y-6">
        <div>
          <label htmlFor="amount">
            Amount
            <div className="mt-1">
              <input
                id="amount"
                type="number"
                value={form.amount}
                required
                min="1"
                max="1_000_000"
                autoFocus
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onFormChange('amount', event.target.valueAsNumber)
                }
              />
            </div>
          </label>
        </div>

        <div>
          <Listbox
            value={form.category}
            onChange={(category: TransactionFormType['category']) => onFormChange('category', category)}
          >
            <Listbox.Label>Category</Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{form.category}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {Categories.map((category, idx) => (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={category}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {category}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div>
          <label htmlFor="date">
            Date & Time
            <div className="mt-1 flex gap-1">
              <div className="flex-1 w-4/6">
                <input
                  id="date"
                  value={form.date}
                  type="date"
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onFormChange('date', event.target.value)}
                />
              </div>
              <div className="w-2/6">
                <input
                  id="time"
                  value={form.time}
                  type="time"
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => onFormChange('time', event.target.value)}
                />
              </div>
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Description
            <div className="mt-1">
              <textarea
                id="description"
                value={form.description}
                onChange={(event) => onFormChange('description', event.target.value)}
              ></textarea>
            </div>
          </label>
        </div>

        <div className="mt-4 flex justify-center gap-6">
          <button
            type={'reset'}
            onClick={() => setForm(DEFAULT_FORM_STATE)}
            className={
              'font-bold py-2 px-4 rounded-lg flex justify-center hover:ring-2 hover:ring-red-600 hover:ring-offset-1 hover:outline-none text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-600'
            }
          >
            Clear
          </button>
          <PrimaryButton type={'submit'}>{submitButtonName}</PrimaryButton>
        </div>
      </fieldset>
    </form>
  )
}
