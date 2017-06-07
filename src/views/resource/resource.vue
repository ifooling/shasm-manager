<template>
    <Row :gutter="24">
        <i-col :span="4" offset="1">
            <Menu theme="light" width="auto" :open-names="['1']"  @on-select="standardItemSelect">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        标准分类
                    </template>
                    <Menu-item :name="item.name" v-for="(item, index) in standards" :key="item.id">
                        {{ item.name }}
                    </Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        组织机构
                    </template>
                    <Menu-item :name="item.name" v-for="(item, index) in organizations" :key="item.id">
                        {{ item.name }}
                    </Menu-item>
                </Submenu>
            </Menu>
        </i-col>
        <i-col :span="19" >
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </i-col>
    </Row>
</template>
<script>
    import { getStandards, getOrganizations } from 'api/resource'
    export default {
        data() {
            return {
                activeName: '1',
                standards: [],
                organizations: []
            };
        },
        methods: {
            getStandardData() {
                getStandards().then(response => {
                    this.standards = response.data.standards;
                    console.log(this.standards);
                });
            },
            getOrganizationData() {
                getOrganizations().then(response => {
                    this.organizations = response.data.organizations;
                });
            },
            standardItemSelect(n) {
                this.$router.push({
                    name: 'resourceList',
                    params: {
                        name: n
                    }
                });
            }
        },
        mounted() {
            this.getStandardData();
            this.getOrganizationData();
        }
    }
</script>
<style>
</style>
