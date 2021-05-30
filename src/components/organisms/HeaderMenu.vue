<template>
    <header>
        <HamburgerButton @btnStateChange="setChildData" v-show="isSP" class="menu-btn"/>
        <div class="menu-back" ref="menu">
            <nav>
                <ul class="menu-list">
                    <li>
                        <h1>
                            <img :src="logoPath" class="logo" alt="タイトルロゴ：最果てのメサイア" />
                        </h1>
                    </li>
                    <li v-for="m in menuItems" :key="m.id">
                        <MenuLink :name="m.name" :link="m.link" />
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'
import HamburgerButton from '../atoms/HamburgerButton.vue';
import menus from '../../assets/menu.json';
export type Menus = typeof menus
import MenuLink from '../atoms/MenuLink.vue';
export default Vue.extend({
    components: {
        HamburgerButton,
        MenuLink
    },
    data() {
        return {
            isOpenMenu: false,
            isBtnOpen: null,
            isSP: false,
            logoPath: require("../../assets/images/logo_white_pc.png"),
            menuItems: menus
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.resizeEvent);
            this.resizeEvent();
        });
    },
    methods: {
        resizeEvent() {
                const matchSP = window.matchMedia('(min-width: 960px)').matches;
                const menu = this.$refs.menu;
                if (matchSP) {
                    this.isSP = false;
                    gsap.set(menu, { visibility: 'visible' });
                    gsap.to(menu, { left: '0'});
                } else {
                    this.isSP = true;
                    if (this.isOpenMenu){
                        gsap.set(menu, { visibility: 'visible' });
                    } else {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                    this.changeSPMenuState();
                }
        },
        setChildData(isBtnOpen: boolean) {
            this.isOpenMenu = isBtnOpen;
            const menu = this.$refs.menu;
            gsap.set(menu, { visibility: 'visible' });
        },
        changeSPMenuState() {
            const menu = this.$refs.menu;
            if (this.isOpenMenu) {
                gsap.to(menu, { left: '0', duration: 0.3 });
            } else {
                gsap.to(menu, { left: '100%', duration: 0.3 });
            }
        }
    },
    watch: {
        isOpenMenu: function(val, oldVal) {
            const menu = this.$refs.menu;
            gsap.set(menu, { visibility: 'visible' });
            this.changeSPMenuState();
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEvent)
    }
})
</script>
<style scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        max-height: 10vh;
        margin: 0;
    }
    .menu-back {
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        perspective: 1000;
    }
    .menu-btn {
        position: fixed;
        top: 0;
        right: 0;
        margin: 17px;
        z-index: 3;
    }
    .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    .logo {
        display: block;
    }
    @media (max-width: 959px) {
        .menu-back {
            height: 100%;
            background: radial-gradient(rgba(185, 185, 185, 0.2), rgba(22, 22, 22, 0.7));
            backface-visibility:hidden;
        }
        .menu-list li {
            text-align: left;
        }
        .logo {
            max-height: 15vh;
            margin: 5vh auto;
            padding: 5px;
        }
    }
    @media (min-width: 960px) {
        .menu-back {
            left: 0;
            height: auto;
            line-height: 10vh;
            margin: 0;
            background: linear-gradient(180deg, rgba(22, 22, 22, 0.7) 71.14572333685322%,rgba(185, 185, 185, 0) 93.32101372756071%)
        }
        .menu-list {
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80vw;
            max-width: 900px;
        }
        .menu-list li {
            display: inline-block;
        }
        .logo {
            float: left;
            width: 150px;
            margin: 10px 50px;
        }
    }
</style>