// list

// const list = [] // hang so
let list = []

// function

//binh thuong

function tenFunction(a, b) {
  return 777
} //==>void/ number string

setTimeout(() => {
  //logic
}, timeout);
// arrow function

({ a }) => {
  return a + 4
}

(a, b) => 4

const num = tenFunction()//=> string

// push 
let userss = [{ name: "task 1", age: 1 }, { name: "task 1", age: 2 }, { name: "task 3", age: 3 }]
let b = [1, 3, 45, 5, 67, 7, 6]
b.push(9)//=> [1, 3, 45, 5, 67, 7, 9]
userss.map((user, index) => user.age + 3)//=> [{ name: "task 1", age: 4 }, { name: "task 1", age: 5 }, { name: "task 3", age: 6 }]
list.splice(1, 1)// start, so luong can xoa
list.sort((a, b) => b - a) // => 0 -1 1
b.filter(num => num > 10) // => [45,67] 
//==> [{ name: "task 1" }]

b.length//==>7
b[index]//

// {}
const user = { name: "Abc", age: 10 }
// {key: value}
user.name//=>Abc

Object.keys(user)///=>>["name", "age"]
Object.values(user)///=>>["Abc", 10]

// string
let numb = 9
numb = numb.toString()//=>"9"
// String(numb)//=>>"9"
const str = "AncudjfdfdB"
str.toLowerCase()//=>>ancudjfdfdb
str.toUpperCase()//=>> ABCBFDJGFDJ
str.charAt(0)
const chuoi = "a-b,c,d"//=> ["a","b","c","d"]
const arr = chuoi.split("")//==>["a","-","b",",","c,d"]
