## Change Log
---
### 2020-08-30

feat: 发布到github
---
### 2020-08-31
feat: 
- 完成checkLogin中间件
- 修复不能获取cookie.key的问题
- 继续补充错误码
- 完成单点登录的逻辑
- 添加登出功能
- 补充注释
---

### 2020-09-01
feat:
- 删除.idea文件夹
---
### 2020-09-02

feat：
- 添加用户注册功能（暂未完成）
- 补充错误码（注册失败、用户已存在）
---
### 2020-09-04

feat:
- 用户注册功能完成
---
### 2020-09-07

feat:
- loginService 写入redis的token的value信息添加userID属性
- 在errorHandler的捕获异常上添加日志写入
---

### 2020-09-08

feat: 
- 添加login的用户二次登录时 删除原先token的操作
- 解决如果登录请求不带cookie 报错的情况
- 添加login_record登录信息表 用于记录用户名、登录、以及时间
---
### 2020-09-11

feat:
- 添加Order、product 控制器
