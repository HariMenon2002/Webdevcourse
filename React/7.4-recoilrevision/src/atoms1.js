//for App1.jsx

import {atom, selector} from "recoil"

export const networkAtom=atom({
    key:"networkAtom",
    default:104
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0
})

export const notificationsAtom=atom({
    key:"notificationsAtom",
    default:12
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:0
})

//selector is something which can be directly derived from other atoms or selectors which is not dependent on anything else
export const totalNotificationsSelector=selector({
    key:"totalNotificationsSelector",
    get:({get})=>{
        const networkAtomCount=get(networkAtom)
        const jobsAtomCount=get(jobsAtom)
        const notificationsAtomCount=get(notificationsAtom)
        const messagingAtomCount=get(messagingAtom)

        return networkAtomCount+jobsAtomCount+notificationsAtomCount+messagingAtomCount
    }
})