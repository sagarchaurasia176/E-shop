import { configureStore } from '@reduxjs/toolkit'
import CatalogSlice from '../CatalogSlice'
import ProductSlice from '../ProductSlice'

export const MainStore = configureStore({
  reducer: {
    AddCart: ProductSlice,
    Carts: CatalogSlice,
  },
})