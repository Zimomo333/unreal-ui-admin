<template>
  <!-- 隐藏不需要显示的路由 -->
  <div v-if="!item.hidden" class="sidebar_item">
    <!-- 如果没有子路由 -->
    <template v-if="!item.children">
        <ur-menu-item :key="item.path" :index="resolvePath(item.path)">
          <i class="icon" v-html="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </ur-menu-item>
    </template>
    <!-- 如果有子路由，渲染子菜单 -->
    <ur-submenu v-else :index="resolvePath(item.path)">
      <template #title>
          <i class="icon" v-html="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :basePath="resolvePath(item.path)" />
    </ur-submenu>
  </div>
</template>

<script>
import path from 'path-browserify'

export default {
  name: 'SidebarItem',    //组件自调用，必须有name属性
  props: {                //接收父组件传参
    item: {
      type: Object,
      required: true
    },
    basePath: {     //从父组件一直拼接下来的基路径
      type: String,
      default: ''
    }
  },
  methods: {
    //拼接父子路径
    resolvePath(routePath) {
      return path.resolve(this.basePath,routePath)
    }
  }
}
</script>

<style lang="scss">
.sidebar_item {
  .icon {
    position: relative;
    top: -.2rem;
  }
}
</style>
