<template>
  <div class="cateCard">
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
  </div>
</template>

<script>
import BlogCard from './BlogCard.vue';
export default {
  name: 'CategoryCards',
  components:{BlogCard}
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cateCard{
    display: flex;
    gap:3rem;
    flex-wrap:wrap;
}
</style>
