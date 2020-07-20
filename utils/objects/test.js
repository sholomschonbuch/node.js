const user = {
    name: "sholom",
    age: 18,
    location: "ny",
    id: 5
}
console.log(user)
const {name, age, location:loc, id = 0} = user
console.log(loc)
console.log(id)