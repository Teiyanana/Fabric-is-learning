<template>
  <section>
    <canvas id="draw" width="600" height="300"></canvas>
    <ul>
      <li>
        <h3></h3>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'DrawShape',
  data: () => ({
    canvas: null
  }),
  mounted() {    
  },
  updated() {
    !this.canvas && (this.canvas = new this.fabric.Canvas('draw'))
    this.drawRect()
  },
  methods: {
    drawRect() {
      const rect = new this.fabric.Rect({
        left: 10,
        top: 10,
        fill: 'red'
      })
      this.canvas.add(rect)
    }
  }
}
</script>

<style scoped>
canvas {
  display: block;
  margin: 0 auto;
}
</style>