<template>
  <div id="app">
    <div class="side">
      <ul class="menu">
        <li
          class="menu-item"
          :class="{active: currentMenu.id === item.id}"
          v-for="item in menu"
          :key="item.id"
          @click="selectMenu(item)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
      <!-- <Introduce v-if="currentMenu.id === 1" />
      <DrawShape v-if="currentMenu.id === 2" /> -->
    </div>
  </div>
</template>

<script>
// import Introduce from './components/1.vue'
// import DrawShape from './components/2.vue'
export default {
  name: 'App',
  components: {
    // Introduce,
    // DrawShape
  },
  data: () => ({
    menu: [
      { id: 1, name: '介绍', },
      { id: 2, name: '绘制一个简单的图形', },
      { id: 3, name: '绘制图片', },
      { id: 4, name: '通过自定义路径绘制', },
      { id: 5, name: '动画', }
    ],
    currentMenu: {}
  }),
  mounted() {
    this.currentMenu = this.menu[0]
  },
  methods: {
    selectMenu(item) {
      this.currentMenu = item
    }
  }
}
</script>

<style>
html,body {
  margin: 0;
  height: 100%;
}
#app {
  display: flex;
  height: 100%;
  background: rgba(0,0,0,0.1);
}
.side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 230px;
}
.menu {
  color: #666;
}
.menu-item {
  font-size: 18px;
  line-height: 2;
  cursor: pointer;
}
.menu-item.active {
  color: #000;
  font-weight: bold; 
}

.main {
  flex: 1;
  height: 100%;
  overflow: auto;
  background: #fff;
  border-left: 1px solid rgba(0,0,0,0.1);
}
section {
  padding: 20px 30px;
}
.title {
  font-size: 24px;
}
pre {
  font-size: 20px;
}
canvas {
  border: 1px solid #999;
}
.category-list {
  line-height: 2;
}
.category-list span{
  display: inline-block;
  width: 150px;
  font-weight: bold;
}
.keyword {
  color: red;
  background: rgba(0,0,0,0.05);
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.08);
}
</style>
