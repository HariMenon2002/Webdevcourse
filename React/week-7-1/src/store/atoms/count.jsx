import { atom, selector } from "recoil";

export const countAtom=atom({
    key:"countAtom",       //unique way to identify the atom
    default:0
});

//dont have same keys for two diff atoms

export const evenSelector=selector({   //for app7.jsx
    key:"evenSelector",
    get:(props)=>{
        const count=props.get(countAtom);  //ie. evenSelector depends on countAtom 
        return count%2;
    }
})