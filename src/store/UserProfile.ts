import axios from "axios";
import { create } from "zustand"

interface UserProfileEntity {
    name: string,
    username: string,
    email: string,
    phone: string,
    changeName: (newName: string) => void,
    getUserInfo: () => void
}

export const useAccount = create<UserProfileEntity>(set => ({
    name: "Savaş Dersim Çelik",
    username: "savasdersimcelik",
    email: "savasdersimcelik@gmail.com",
    phone: "+905078614659",
    changeName: (newName: string) => {
        set(() => ({ name: newName }))
    },
    getUserInfo: async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users/" + Math.floor(Math.random() * 11));
        set(() => ({
            name: result.data.name,
            username: result.data.username,
            email: result.data.email,
            phone: result.data.phone,
        }))
    }
}))