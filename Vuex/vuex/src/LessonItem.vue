<template>
  <div class="container">
    <div class="card mb-4" >
      <img :src="lessonprops.cover"/>
      <div class="card-body d-flex">
        <div >
          <h4  id="title">{{ lessonprops.title }}</h4>
          <span id="price">{{ lessonprops.price }}</span>      
          <span  id="teachers">{{ lessonprops.teachers }}</span>
        </div>
        <div class="align-self-end">
          <button type="button" class="btn btn-secondary">Secondary</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['lessonprops'],
  }
</script>



