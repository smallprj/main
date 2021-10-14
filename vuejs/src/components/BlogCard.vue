<template>
  <div class="blogCard">
          <div class="blogCard__img">
              <img loading="lazy" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/122519476/original/c13247425075296139fa2e8682f666c0da5e9501/do-better-programming-for-your-great-arduino-project.png" alt="">
          </div>
          <div class="blogCard__desc">
              <span>Intro to Cassette Recorder Operation, Maintenance, and Repair by ke4mcl</span>
          </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blogCard {
    width: 16rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    &__img {
        width: 100%;
        height: 16rem;
        overflow: hidden;
        border-radius: 10px 10px 0 0;
        & img {
            width:100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &__desc {
        height: 4rem;
        padding:0.5rem;
        border: 2px solid $dim-gray;
        border-top: 0;
        border-radius: 0 0 10px 10px;
    }
}
</style>
