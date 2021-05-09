<template>
  <div>
    <span class="logo">UnrealUI-Admin</span>
    <ur-breadcrumb class="breadcrumb" separator="/">
      <ur-breadcrumb-item
        v-for="item in $route.matched"
        :key="item.path"
        :to="item.path"
      >{{item.meta.title}}</ur-breadcrumb-item>
    </ur-breadcrumb>
    <div class="dropdown">
      <ur-dropdown>
        <ur-button>
          <span>菜单</span>
          <svg
            t="1620467593457"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2585"
            width="20"
            height="20"
          >
            <path
              d="M512 729.86624c-13.70112 0-27.40224-5.23264-37.84704-15.6672l-328.69376-328.704c-20.91008-20.91008-20.91008-54.80448 0-75.70432 20.89984-20.89984 54.79424-20.89984 75.70432 0L512 600.63744l290.83648-290.83648c20.91008-20.89984 54.80448-20.89984 75.70432 0 20.91008 20.89984 20.91008 54.79424 0 75.70432l-328.69376 328.704C539.40224 724.64384 525.70112 729.86624 512 729.86624z"
              p-id="2586"
              fill="#707070"
            />
          </svg>
        </ur-button>
        <template #dropdown>
          <ur-dropdown-menu>
            <ur-dropdown-item @click.native="logout">登出</ur-dropdown-item>
          </ur-dropdown-menu>
        </template>
      </ur-dropdown>
    </div>
    <div class="sidebar">
      <ur-menu :default-active="$route.path" :collapse="isCollapse" router>
        <sidebar-item v-for="route in routes[0].children" :key="route.path" :item="route" />
      </ur-menu>
    </div>
    <router-view class="content" />
  </div>
</template>

<script>
import { routes } from '../router'; // {}指定需要引用的模块
import SidebarItem from '../components/SidebarItem.vue';

export default {
  name: 'home',
  components: {
    SidebarItem,
  },
  data() {
    return {
      isCollapse: false,
      routes,
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch('logout')
        .then(() => {
          this.$router.push('login');
        })
        .catch(() => {
          console.log('登出失败');
        });
    },
  },
};
</script>

<style lang="scss">
.logo {
  display: inline-block;
  margin: 1.8rem 0 0 2rem;
  font-size: 1.7rem;
  font-weight: 700;
  color: #18634b;
  text-align: center;
  border: 0.0625rem solid #d1d9e6;
  border-radius: 0.55rem;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  padding: 0.6rem 0.8rem;
  vertical-align: middle;
}
.breadcrumb {
  margin: 1.8rem 0 0 3rem;
  line-height: 0.7;
  height: 0.7rem;
  width: 50%;
  display: inline-block;
  vertical-align: middle;
  font-size: 1.1rem;
}
.dropdown {
  float: right;
  margin: 1.8rem 2rem 0 0;
  svg,
  span {
    vertical-align: middle;
  }
}
.sidebar {
  float: left;
  margin: 3rem 0 0 1.5rem;
  width: 18%;
}
.content {
  float: left;
  margin: 3rem 0 0 2rem;
  width: 60%;
}
</style>