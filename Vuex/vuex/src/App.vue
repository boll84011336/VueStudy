<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="addCount">Increment Async</button>
    <pre>{{ $store.state }}</pre>

  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count;
    }
  },
  methods: {
    addCount() {
      this.$store.commit('addCount');
    }
  },
  mounted() {
    console.log("TEST",this.state)
    console.log(this.$store) // 在 mounted 生命週期中輸出 $store 屬性
  }
}
</script>
