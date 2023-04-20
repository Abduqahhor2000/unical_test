// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../index'

// export interface TransferInfo {
//     id: Number,
//     date: Date,
//     amount: String,
//     full_name: String,
//     type: Boolean,
//     comment: String,
//     transfer_type: Number
//   }

// interface TableState {
//   value: Array<TransferInfo>
// }

// const initialState: TableState = {
//   value: [],
// }

// export const tableData = createSlice({
//   name: 'tableData',
//   initialState,
//   reducers: {
//     addTableData: (state, action: PayloadAction<Array<TransferInfo>>) => {
//       state.value = action.payload
//     },
//     clearTableData: (state) => {
//       state.value = []
//     },
//   },
// })

// export const { addTableData, clearTableData } = tableData.actions

// export const selectTableData = (state: RootState) => state.tableData.value

// export default tableData.reducer