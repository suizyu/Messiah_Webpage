<template>
    <header>
        <HamburgerButton v-show="isSP" 
            @btnStateChange="setChildData"
            ref="hamburgerBtn"
            class="menu-btn"/>
        <div class="menu-back" ref="menu">
            <nav>
                <ul class="menu-list">
                    <li>
                        <img src="~/assets/images/logo_white_pc.png" 
                            class="logo" 
                            alt="最果てのメサイア" />
                    </li>
                    <li v-for="m in menuItems" :key="m.id" @click="ClickedMenu" >
                        <MenuLink :name="m.name" :link="m.link"/>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script lang="ts">
import Vue from 'vue'
import gsap from 'gsap'
import HamburgerButton from '../atoms/HamburgerButton.vue'
import menus from '~/assets/menu.json'
export type Menus = typeof menus
import MenuLink from '../atoms/MenuLink.vue'
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
                const matchSP = window.matchMedia('(max-width: 960px)').matches;
                const menu = this.$refs.menu;
                if (!matchSP) {
                    this.isSP = false;
                    gsap.set(menu, { visibility: 'visible' });
                    gsap.to(menu, { left: '0'});
                } else {
                    this.isSP = true;
                    if (this.isOpenMenu) {
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
        },
        ClickedMenu() {
            console.log("click MenuLink!")
            if (this.isSP) {
                this.isOpenMenu = false;
                this.$refs.hamburgerBtn.btnClick();
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
        z-index: 10;
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
        overflow: hidden;
    }
    .logo {
        display: block;
    }
    @media (max-width: 960px) {
        .menu-back {
            height: 100%;
            background: radial-gradient(rgba(37, 37, 37, 0.6), rgba(22, 22, 22, 0.95));
            backface-visibility:hidden;
        }
        .menu-list li {
            text-align: left;
            display: block;
            margin: 0 auto;
        }
        nav {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .logo {
            max-height: 17vh;
            margin:  5vh 0 5vh 0;
        }
    }
    @media (min-width: 961px) {
        .menu-back {
            left: 0;
            height: 65px;
            line-height: 10vh;
            margin: 0;
            padding: 5px 0 10px 0;
            background: linear-gradient(180deg, rgba(22, 22, 22, 0.7) 71.14572333685322%,rgba(185, 185, 185, 0) 93.32101372756071%);
        }
        .menu-list {
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1300px;
            margin: 0 5vw;
        }
        nav,
        .menu-list,
        .menu-list > ul {
            height: 100%;
        }
        .menu-list li {
            display: inline-block;
            flex-shrink: 0;
        }
        .logo {
            width: 110px;
            margin: 0 50px;
            padding: 1px;
        }
    }
</style>