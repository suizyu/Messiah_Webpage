<template>
    <ul class="menu-list">
        <li v-for="m in menuItems" :key="m.id">
            <MenuLink :name="m.name" :link="m.link" />
        </li>
    </ul>
</template>

<script lang="ts">
    import menus from '../../assets/menu.json'
    export type Menus = typeof menus
    import MenuLink from '../atoms/MenuLink.vue'
    export default {
        components: {
            MenuLink
        },
        data() {
            return {
                menuItems: menus
            }
        }
    }
</script>

<style>
    .menu-list {
        list-style: none;
        overflow: hidden;
    }

    .menu-list li {
        display: block;
        text-align: center;
        float: left;
        width: 140px;
        margin-right: 45px;
    }
</style>