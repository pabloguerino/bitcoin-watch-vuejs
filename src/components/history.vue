<template>
  <div class="canvasContainer">
    <canvas id="history"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';

  export default {

    mounted() {
      this.$bitcoin.fetchHistory((data) => {
        this.data = data;
        this.drawGraph();
      });
    },

    methods: {
      drawGraph() {
        let ctx = document.getElementById('history').getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Object.keys(this.data),
            datasets: [{
              label: 'Price',
              data: Object.values(this.data),
              pointBackgroundColor: 'rgb(1, 255, 112)',
              borderColor: 'rgb(61, 153, 112)',
              fill: false,
            }]
          },
          options: {
            legend: {
              display: false
            },
            maintainAspectRatio: false,
          }
        });
      },
    },

    data () {
      return {
        chart: null,
        data: {},
      }
    }
  }
</script>

<style lang="scss">
  .canvasContainer {
    height: 60vh;
    width: 100%;
    margin: 0 auto;
  }
</style>
