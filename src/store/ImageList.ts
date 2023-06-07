import axios from "axios";
import { create } from "zustand"

interface ImagesListEntity {
    list: {
        albumId: number,
        id: number,
        title: string,
        url: string,
        thumbnailUrl: string,
    }[],
    getList: () => void,
    delete: (id: number) => void,
    loading: boolean,
}

export const useImages = create<ImagesListEntity>(set => ({
    list: [],
    loading: false,
    getList: async () => {
        set(() => ({ loading: true }));
        const result = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
        set(() => ({ list: result.data, loading: false }))
    },
    delete: async (id: number) => {
        set((state) => ({ list: state.list.filter((item) => item.id !== id)}))
    }
}))