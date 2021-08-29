<template>
  <section>
    <h1>Fabric.js</h1>
    <p>Fabric.js 是一个强大的 JavaScript 开源库，它使得和 canvas 的交互变得轻而易举。</p>
    <p>Fabric.js 为 canvas 提供缺失的对象模型、SVG 解析器、交互层和一整套必备工具。</p>

    <h2>比较</h2>
    <ul>
      <li>
        <h3>原生 canvas API 绘图</h3>
        <div>
          <img src="../assets/native-1.jpg" alt="">
        </div>
        <canvas id="nativeCanvas" width="200" height="200"></canvas>
      </li>
      <li>
        <h3>Fabric API 绘图</h3>
        <div>
          <img src="../assets/1.jpg" alt="">
        </div>
        <canvas id="canvas" width="200" height="200"></canvas>
      </li>
    </ul>
    <h2>Objects</h2>
    <p>除了绘制矩形 fabric.Rect API，Fabric 还提供了其他图像绘制 API，总共有7种图形绘制方法</p>
    <ul class="category-list">
      <li><span>fabric.Circle</span> 圆形</li>
      <li><span>fabric.Ellipse</span> 椭圆形</li>
      <li><span>fabric.Line</span> 直线</li>
      <li><span>fabric.Polygon</span> 多边形</li>
      <li><span>fabric.Polyline</span> 折线</li>
      <li><span>fabric.Rect</span> 矩形</li>
      <li><span>fabric.Triangle</span> 三角形</li>
    </ul>
    <p>图形的绘制只是一个开始，某些时候，我们还要对以绘制的图形进行操作，例如操作颜色、透明度、大小或位置等。</p>
    <p>Fabric 封装了图形渲染和状态管理，我们仅仅需要对这些图形对象的属性进行修改就可以。</p>
    <ul class="category-list">
      <li>位置属性：left、top</li>
      <li>尺寸属性：width、height</li>
      <li>渲染属性：fill、opcity、stroke、strokeWidth</li>
      <li>缩放属性：scaleX、scaleY</li>
      <li>旋转属性：rotate</li>
      <li>裁剪属性：flipX、flipY</li>
      <li>倾斜属性：skewX、skewY</li>
    </ul>
    <p>对图形关于上面这些属性的操作，Fabric 提供了 <span class="keyword">set</span> 方法对这些属性进行操作：<button @click="setExample">改变颜色和边框</button></p>
  </section>
</template>

<script>
export default {
  name: 'Introduce',
  data: () => ({
    fabricCanvas: null,
    fabricRect: null
  }),
  mounted() {
    this.nativeDrawRect()
    this.drawRect()
  },
  updated() {
    this.nativeDrawRect()
    this.drawRect()
  },
  methods: {
    nativeDrawRect() {
      const canvas = document.getElementById('nativeCanvas')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'red'
      ctx.translate(100, 100)
      ctx.rotate(Math.PI / 180 * 45)
      ctx.fillRect(-10, -10, 20, 20)
    },
    drawRect() {
      const fabric = this.fabric
      const canvas = new fabric.Canvas('canvas')
      const rect = new fabric.Rect({
        left: 100,
        top: 90,
        width: 20,
        height: 20,
        fill: 'red',
        angle: 45
      })
      canvas.add(rect)
      this.fabricCanvas = canvas
      this.fabricRect = rect
      // rect.set({
      //   fill: 'blue',
      //   stroke: 'red',
      //   strokeWidth: 2
      // })
      // this.setExample()
    },
    setExample() {
      this.fabricRect.set({
        fill: 'blue'
      })
      this.fabricCanvas.renderAndResetBound()
      console.log(this.fabricCanvas)
      // const fabric = this.fabric
      // const canvas = this.fabricCanvas
      // const rect = new fabric.Rect()
      // rect.set({
      //   left: 10,
      //   top: 10,
      //   width: 40,
      //   height: 40,
      //   stroke: 'red',
      //   strokeWidth: 2
      // })
      // rect.set('fill', 'blue')
      // canvas.add(rect)
    }
  }
}
</script>

<style scoped>

</style>