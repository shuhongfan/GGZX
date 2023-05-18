<template>
    <el-card>
        <el-form :inline="true">
            <el-form-item label="一级分类">
                <!-- change:选中值发生变化时触发 -->
                <el-select :disabled="scene == 0 ? false : true" v-model="categoryStore.c1Id" @change="handler">
                    <!-- label:即为展示数据 value:即为select下拉菜单收集的数据 -->
                    <el-option v-for="(c1, index) in categoryStore.c1Arr" :key="c1.id" :label="c1.name"
                        :value="c1.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select :disabled="scene == 0 ? false : true" v-model="categoryStore.c2Id" @change="handler1">
                    <el-option v-for="(c2, index) in categoryStore.c2Arr" :key="c2.id" :label="c2.name"
                        :value="c2.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="三级分类">
                <el-select :disabled="scene == 0 ? false : true" v-model="categoryStore.c3Id">
                    <el-option v-for="(c3, index) in categoryStore.c3Arr" :key="c3.id" :label='c3.name'
                        :value="c3.id"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
//引入组件挂载完毕方法
import { onMounted } from 'vue';
//引入分类相关的仓库
import useCategoryStore from '@/store/modules/category';
let categoryStore = useCategoryStore();
//分类全局组件挂载完毕,通知仓库发请求获取一级分类的数据
onMounted(() => {
    getC1();
});
//通知仓库获取一级分类的方法
const getC1 = () => {
    //通知分类仓库发请求获取一级分类的数据
    categoryStore.getC1();
}

//此方法即为一级分类下拉菜单的change事件(选中值的时候会触发,保证一级分类ID有了)
const handler = () => {
    //需要将二级、三级分类的数据清空
    categoryStore.c2Id = '';
    categoryStore.c3Arr = [];
    categoryStore.c3Id = '';
    //通知仓库获取二级分类的数据
    categoryStore.getC2();
}
//此方法即为二级分类下拉菜单的change事件(选中值的时候会触发,保证二级分类ID有了)
const handler1 = () => {
    //清理三级分类的数据
    categoryStore.c3Id = '';
    categoryStore.getC3();
}

//接受父组件传递过来scene
defineProps(['scene']);

</script>

<style scoped></style>