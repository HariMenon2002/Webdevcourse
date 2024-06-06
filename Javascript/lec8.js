
const users=[{kidney:[{no:"1"},{no:"11"}]}, {kidney:{no:"2"}}, {kidney:{no:"3"}}, {kidney:{no:"4"}}, ]

console.log(users[0]["kidney"][1]["no"])
console.log(users[0].kidney[1].no)              //same as prev


console.log(users[1]["kidney"]["no"])