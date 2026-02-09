const users = []; // in-memory store (NO DB yet)

class User {
  static async create({ username, email, password }) {
    const user = { id: users.length + 1, username, email, password };
    users.push(user);
    return user;
  }

  static async findOne({ email }) {
    return users.find(user => user.email === email);
  }
}

module.exports = User;
