'use strict';

const Controller = require('egg').Controller;

// 用户 controller 层
class UserController extends Controller {
    // 有关用户注册的业务逻辑
    async register(userInfo) {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        const userWithUsername = await ctx.service.user.findUser(username);

        if(userWithUsername?.length){
            ctx.body = {
                message: username + ' 该用户名已存在',
                status: 1,
            }
            return;
        }
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
    // 有关用户登陆的业务逻辑
    async login(userInfo) {
        const { ctx } = this;
        const { username, password } = ctx.request.body;
        const user = await ctx.service.user.findUser(username, password);
        if(user?.length){
            ctx.body = {
                data: user[0],
                message: '登陆成功',
                status: 200,
            }
        }else {
            ctx.body = {
                data: user,
                message: '登陆失败',
                status: 10001,
            }
        }
        return user;
    }
}

module.exports = UserController;
