// app/service/user.js
const Service = require('egg').Service

class VersionService extends Service {
  async getVersions (username) {
    const versionList = await this.app.mysql.query(`select * from versions ${(username ? 'where username = ' + username : '')}`, '');
    return versionList;
  }
  async insert (username, versionItem) {
    const { id, versionName, description, versionJson, operator, createTime, modifyTime } = versionItem;
    const res = await this.app.mysql.query(`insert into versions (username, id, versionName, description, versionJson, operator, createTime, modifiyTime) values (${ username + ', ' +  id + ', '+ versionName + ', '+ description + ', '+ versionJson + ', ' + operator +  createTime + ', ' + modifyTime})`, '');
    return res;
  }
  async delete (username, versionId) {
    const res = await this.app.mysql.query(`delete from versions where (${(username ? 'username = ' + username + ' and' : '') + (versionId ? 'id = ' + versionId : '')})`, '');
    return res;
  }
}

module.exports = VersionService;