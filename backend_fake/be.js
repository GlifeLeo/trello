const users = [
  {
    username: "user1",
    password: "123456", // 64578365hkj@372537248p435 hash
    token: "token1",
    name: "Anh",
    email: "email1@gmail.com",
  },
  {
    username: "user2",
    password: "123456",// 64578365hkj@372537248p435 hash
    token: "token2",
    name: "B",
    email: "email2@gmail.com",
  }
]

function login(username, password) {
  const user = users.find(user => user.username == username)
  if (!user) {
    return { success: false, message: "user not found" }
  }
  if (user.password === password) {
    return {
      success: true,
      token: user.token,
      user: user,// bo field password
      message: "login success"
    }
  } else {
    return { success: false, message: "password wrong" }
  }
}
function getUserByToken(token) {
  const user = users.find(user => user.token == token)
  if (!user) {
    return { success: false, message: "user not found" }
  }
  return {
    success: true,
    token: user.token,
    user: user,// bo field password
    message: "login success"
  }
}

// {key:value}
//keys: listName, cards
// values: "to do", []
let lists = [
  { listName: "to do", cards: ["1", "2"] },
  { listName: "doing", cards: [] },
  { listName: "done", cards: [] },
]// {listName:"to do",cards:[]}

// CRUD 
function createNewList(listName) {
  lists.push({ listName: listName, cards: [] })
}

function getLists(filter) {
  if (filter == "cardLength>0")
    return [...lists.filter(l => l.cards.length > 0)]
  return [...lists]
}

function getListWithCardLengthGt0() {
  return lists.filter(l => l.cards.length > 0)
}

function deleteList(index) {
  lists.splice(index, 1)
}

function editList(index, newListName) {
  lists[index].listName = newListName
}

module.exports = {
  login,
  getUserByToken,
  createNewList,
  deleteList,
  editList,
  getLists
}