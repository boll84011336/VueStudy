<template>
  <div class="list">
    <LessonItem 
      v-for="lesson in lessons" 
      :lessonprops="lesson"/>
  </div>
</template>

<script>
import{ mapState, mapActions } from 'vuex';
import LessonItem from './LessonItem.vue';

export default {
  components: {
    LessonItem,
  },
  computed: {
    ...mapState(['lessons']),
  },
  methods: {
    ...mapActions(['fetchLessons']),
  },
  mounted(){
      this.$store.dispatch('fetchLessons')
  }
}
</script>

<style scoped>
.list{
  padding-top: 30px;
  width: 20%;
  margin: 0 auto;
}
</style>
