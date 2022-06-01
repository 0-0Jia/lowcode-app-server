'use strict';

const Controller = require('egg').Controller;

class VersionController extends Controller {
    async getVersions() {
        const { ctx } = this;
        const { username } = ctx.request.body;
        const versions = await ctx.service.version.getVersions(username);
        if(versions){
            ctx.body = {
                data: versions,
                status: 200,
            }
        }else {
            ctx.body = {
                message: '获取失败',
                status: -1,
            }
        }
    }
    async addVersion() {
        const { ctx } = this;
        const { username, versionItem } = ctx.request.body;
        const res = await ctx.service.version.insert(username, versionItem);
        if(res){
            ctx.body = {
                data: res,
                status: 200,
            }
        }else {
            ctx.body = {
                message: '添加失败',
                status: -1,
            }
        }
    }
    async deleteVersion() {
        const { ctx } = this;
        const { username, versionId } = ctx.request.body;
        const res = await ctx.service.version.delete(username, versionId);
        if(res){
            ctx.body = {
                data: res,
                status: 200,
            }
        }else {
            ctx.body = {
                message: '删除失败',
                status: -1,
            }
        }
    }
}

module.exports = VersionController;