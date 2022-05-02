'use strict';

const Controller = require('egg').Controller;

class VersionController extends Controller {
    async getVersions(data) {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        const user = await ctx.service.user.addUser(username, password);
        if(user){
            ctx.body = {
                data: ctx.request.body,
                message: '注册成功',
                status: 200,
            }
        }else {
            ctx.body = {
                data: user,
                message: '注册失败',
                status: 10001,
            }
        }
    }
    async addVersion(data) {
        
    }
    async deleteVersion(data) {
        
    }
}

module.exports = VersionController;