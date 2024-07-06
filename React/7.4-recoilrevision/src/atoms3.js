//for App3.jsx
import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get:async()=>{
            await new Promise(r=>setTimeout(r,5000))  //waits for 5s
            const res=await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})