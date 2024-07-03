import { atom } from "recoil";

export const countAtom=atom({
    key:"countAtom",       //unique way to identify the atom
    default:0
});

//dont have same keys for two diff atoms