import { create } from 'zustand'

type UserStore = {
    id: string
    setId: (id: string) => void
}

export const useUserStore = create<UserStore>()((set) => {
    return {
        id: '',
        setId: (id: string) => set({ id }),
    }
})
