<template>
    <Card>
        <div style="text-align:center">
            <img :src="item.icon">
            <h3>{{ item.name }}</h3>
            <el-row>
                <el-col :span="12">
                    <Button style="width:100%" type="ghost">打开</Button>
                </el-col>
                <el-col :span="12">
                    <Button style="width:100%" type="ghost">详情</Button>
                </el-col>
            </el-row>
        </div>
    </Card>
</template>
<script>
    export default{
        data() {
            return {
                item: {}
            }
        }
    }
</script>
<style></style>
