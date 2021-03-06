const db = require("../database/config")

module.exports = {
    add,
    find,
    findById,
    findByUsername
}

async function add(user) {
    const [id] = await db("users").insert(user)
        return findById(id)
}

function find() {
    return db("users")
}

function findById(id) {
    return db("users")
        .where("id", id)
        .first()
}

function findByUsername(username) {
    return db("users")
        .where("username", username)
        .first()
}