class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  showInfo() {
    return `Username: ${this.username} | Age: ${this.age}`;
  }
}

exports.User = User;
