import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        expenseList: [
            {name: 'apple', price: 1200},
            {name: 'orange', price: 5000}
        ]
    },
    reducers: {
      addExpense: (currentSlice, action) => {
          currentSlice.expenseList.push({name: 'test', price: 0})
      }
    }
})

export const {addExpense}  = expenseSlice.actions
export default expenseSlice.reducer
