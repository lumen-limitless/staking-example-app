import create from 'zustand'
import { devtools } from 'zustand/middleware'
import createUISlice, { UISlice } from './createUISlice'

interface RootSlice extends UISlice {}

const useStore = create<RootSlice>()(
  devtools((...a) => ({
    ...createUISlice(...a),
  }))
)

export default useStore
