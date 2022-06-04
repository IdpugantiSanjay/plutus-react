import { Bill } from "./Bill"
import { Authentication, Budget, Transaction } from "./Transaction"

export type EntityMap = {
  Transaction: Transaction
  Authentication: Authentication
  Budget: Budget
  Bill: Bill
}
