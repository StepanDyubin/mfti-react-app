import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './slice'

export default configureStore({
    reducer: {
        persons: personsReducer,
    }
})
