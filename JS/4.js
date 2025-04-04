const allUsers = [{
    firstName: "harshul",
    gender: "male"
}, {
    firstName: "shivya",
    gender: "female",
    metadata: {
        age: 21,
        address: "vikaspuri"
    }
}, {
    firstName: "naitik",
    gender: "male"
}]

for (let i = 0; i<allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"])
    }
}