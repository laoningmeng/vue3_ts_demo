import Mock from 'mockjs'
import Api from './api'
console.log(111)
Mock.mock("/api/login","post",Api.login)

export default Mock