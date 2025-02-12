import { atom } from "recoil";

import {User} from '../../types/user'

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()



export const userInfo = atom<User | null>({
    key : 'userInfo',
    default : null,
    effects_UNSTABLE: [persistAtom],
})