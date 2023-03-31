<template>
  <div>
    <Header/>
    <LessonList/>
  </div>
</template>

<script>
import LessonList from './LessonList.vue';
import Header from './Header.vue';


export default {
  components: {
    Header,
    LessonList
  },
}
</script>

<style>
html, body{
  font-family: Microsoft JhengHei;
  padding: 0;
  margin: 0;
}
</style>
