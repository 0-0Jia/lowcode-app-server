// app/service/user.js
const Service = require('egg').Service

class UserService extends Service {
  async findUser (username, password) {
    // 请求执行 sql
    const user = await this.app.mysql.query(
      `select * from users ${(username ? "where username = '" + username + "'" : "") + (password ? " and password = '" + password + "'" : "")}`,
    '');
    return user;
  }
  async addUser (username, password) {
    const user = await this.app.mysql.query(
      `insert into users (username, password) values ('${ username + "', '" + password}')`,
      '');
    return user;
  }
}

module.exports = UserService;