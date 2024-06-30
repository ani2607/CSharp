import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { Tab } from "../../types/tab";

const { persistAtom } = recoilPersist()

export const TabInfo = atom<Tab>({
    key : 'TabInfo',
    default : Tab.explore,
    effects_UNSTABLE: [persistAtom],
})