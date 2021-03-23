import { createSlice } from '@reduxjs/toolkit'

export const personsSlice = createSlice({
    name: 'persons',
    initialState: { list: [] },
    reducers: {
        setPersons: (state, action) => {
            return {
                list: action.payload
            };
        },
    }
})
// personsSlice.actions.setPersons([1,2,3]) // { type: 'persons/setPersons', payload: { data: [1,2,3] } }

export const { setPersons } = personsSlice.actions

export default personsSlice.reducer
