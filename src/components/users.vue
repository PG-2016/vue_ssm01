<template>
    <div>
        <!-- card 卡片，相当于一个带样式的DIV -->
        <el-card class="box-card" >
            <!-- 面包屑导航 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>
                    <a href="/">用户管理</a>
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <a href="/users">用户列表</a>
                </el-breadcrumb-item>
            </el-breadcrumb>

            <!-- 搜索框 -->
            <el-row style="margin-top: 15px">
                <el-col :span="10">
                    <div>
                        <el-input
                            class="searchInput"
                            placeholder="请输入内容"
                            v-model="query"
                            clearable
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-search"
                                @click="searchUser()"
                            ></el-button>
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="14">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 用户列表 -->
            <el-table
                :data="userList"
                stripe
                style="width: 100%"
                height="250px"
            >
                <el-table-column label="#" width="60">
                    <template slot-scope="scope">
                        {{scope.$index+1}}
                    </template>
                </el-table-column>
                <el-table-column prop="username" label="姓名" width="100">
                </el-table-column>
                <el-table-column prop="email" label="邮箱" width="130">
                </el-table-column>
                <el-table-column prop="mobile" label="电话" width="180">
                </el-table-column>
                <el-table-column label="创建日期" width="180">
                    <!-- 如果展示的数据不是data中的属性，需要用template包裹 -->
                    <template slot-scope="scope">
                        {{ scope.row.create_time | fmtdate }}
                    </template>
                </el-table-column>
                <el-table-column label="用户状态" width="100">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.mg_state"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                        >
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button
                            type="primary"
                            icon="el-icon-edit"
                            circle
                            size="mini"
                            plain
                            @click="handleEdit(scope.$index, scope.row)"
                        ></el-button>

                        <el-button
                            type="danger"
                            icon="el-icon-delete"
                            circle
                            size="mini"
                            plain
                            @click="handleDelete(scope.$index, scope.row)"
                        ></el-button>

                        <el-button
                            type="success"
                            icon="el-icon-check"
                            circle
                            size="mini"
                            plain
                        ></el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination
                background
                :pager-count="9"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes, prev, pager, next, jumper"
                :current-page="pagenum"
                :total="total"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pagesize"
            >
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: "",
            userList: [],
            status: true,
            pagenum: 1,
            pagesize: 5,
            total: 0,
        };
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val){
            console.log(`每页 ${val} 条`);
            this.pagesize = val;
            this.getTableData(this.pagenum);
        },
        handleCurrentChange(pagenum){
            console.log(`当前页: ${pagenum}`);
            
            this.getTableData(pagenum);
        },
        searchUser(){
            this.getTableData(1)
        },
        async getTableData(pagenum) {
            
            const token = localStorage.getItem("token");
            const res = await this.$http.get("users", {
                headers: { Authorization: token },
                // `data` 是作为请求主体被发送的数据
                // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
                // `params` 是即将与请求一起发送的 URL 参数
                params: {
                    query: this.query,
                    pagenum: pagenum,
                    pagesize: this.pagesize,
                },
            });

            const {
                data: { data, meta },
            } = res;

            // console.log(data);

            if (meta.status === 200) {
                this.userList = data.users;
                this.total = data.total;
                this.pagenum = data.pagenum;
                
            } else {
                this.$message.error("获取用户信息失败！");
            }
        },
    },
    created() {
        this.getTableData(1);
    },
};
</script>

<style>
.searchInput {
    width: 400px;
}
</style>