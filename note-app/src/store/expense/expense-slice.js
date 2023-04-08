import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        income: 7000,
        exepenseList: [
            {name: 'apple', price: 1200},
            {name: 'orange', price: 5000}
        ]
    },
    reducers: {
        addExpense: (currentSlice, action) => {
            currentSlice.exepenseList.push(action.payload)
        },
        setIncome: (currentSlice, action) => {
            currentSlice.income += action.payload
        }
    }
})

export const { setIncome, addExpense } = expenseSlice.actions

export default expenseSlice.reducer
