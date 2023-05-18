<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="admin-side">
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router
      >
        <el-menu-item v-for="item in menu" :index="item.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
      <el-container>
        <el-header class="admin-header">
          <el-row :gutter="20">
           <h2>后台管理系统</h2>
          </el-row>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()
const list = router.getRoutes()
const menu = list.filter((item)=>{
  return item.meta.isShow
})
console.log("menu:",menu)
</script>
<style lang="scss" scoped>
.admin-header{
  height:60px;
  width:100%;
  text-align: center;
  color:white;
  background:#2b8cbe;
  h2{
    line-height: 60px;
    height: 60px;
    margin:0 auto;
  }
}
.admin-side{
  width:200px;
  height: 100vh;
  background:#9ecae1

}
</style>

