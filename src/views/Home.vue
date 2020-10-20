<template>
    <el-container class="container">
        <el-header>
            <el-row>
                <el-col :span="4">
                    <img src="@/assets/logo.png" alt="图片加载失败">
                </el-col>
                <el-col :span="19" class="middle">
                    <h2>后台电商管理系统</h2>
                </el-col>
                <el-col :span="1">
                    <div class="grid-content bg-purple">
                        <a href="#" class="loginout">退出</a>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside class="aside" width="200px">
                <!-- 侧边栏菜单 -->
                <el-menu
                    default-active="1"
                    :router=true
                    :unique-opened=true
                >
                    <el-submenu index="1">

                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>用户管理</span>
                        </template>

                        
                        <el-menu-item index="1-1">
                            <i class="el-icon-folder-opened"></i>
                            <span>用户列表</span>
                        </el-menu-item>
                        
                    </el-submenu>

                    <el-submenu index="2">

                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span>权限管理</span>
                        </template>

                        
                        <el-menu-item index="2-1">
                            <i class="el-icon-coordinate"></i>
                            <span>权限列表</span>
                        </el-menu-item>

                        <el-menu-item index="2-2">
                            <i class="el-icon-user"></i>
                            <span>角色列表</span>
                        </el-menu-item>
                        
                    </el-submenu>

                    <el-submenu index="3">

                        <template slot="title">
                            <i class="el-icon-s-goods"></i>
                            <span>商品管理</span>
                        </template>

                        
                        <el-menu-item index="3-1">
                            <i class="el-icon-shopping-cart-full"></i>
                            <span>商品列表</span>
                        </el-menu-item>

                        <el-menu-item index="3-2">
                            <i class="el-icon-setting"></i>
                            <span>分类参数</span>
                        </el-menu-item>

                        <el-menu-item index="3-3">
                            <i class="el-icon-goods"></i>
                            <span>商品分类</span>
                        </el-menu-item>
                        
                    </el-submenu>

                </el-menu>
            </el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
    methods: {
      
    }
};
</script>

<style >
.container {
    height: 100%;
    background-color: #B3C0D1;
}
.aside {
    background-color: hsl(215, 13%, 82%);
}
.main {
    background-color: #f6f7f8;
}
.loginout{
    line-height: 60px;
    text-decoration: none;
}
.middle{
    text-align: center;
    line-height: 60px;
}
</style>