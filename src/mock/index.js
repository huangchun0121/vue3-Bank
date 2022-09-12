const Mock = require('mockjs')   //引入mock

//格式： Mock.mock("请求的URL地址",{"数据对象"})
// Mock.mock("/api/login", (req, res) => {});

//Mock.mock( rurl, rtype, template )
// Mock.mock("/api/login","post" (req, res) => {});

Mock.mock("/api/login", (req, res) => {
  {
    return Mock.mock({
      username: "user",
      password: "123456",
      token: "20191129592"
    });
  }
});