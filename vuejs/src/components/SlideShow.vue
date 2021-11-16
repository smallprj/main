<template>
    <div class="slider">
        <div class="slider__radio">
            <input type="radio" name="radio1">
            <input type="radio" name="radio2">
            <input type="radio" name="radio3">
        </div>
        <div class="slider__slides">
            <div class="slider__slide">
                <img src="https://images.unsplash.com/photo-1633738006628-9112f2aa11b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="">
            </div>
            <div class="slider__slide">
                <img src="https://images.unsplash.com/photo-1633738040626-d2a762673149?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="">
            </div>
            <div class="slider__slide">
                <img src="https://images.unsplash.com/photo-1626616289545-9f5f710368c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="">
            </div>
        </div>
        <div class="slider__navigate">
            <label for="radio1" class="slider__btn"></label>
            <label for="radio2" class="slider__btn"></label>
            <label for="radio3" class="slider__btn"></label>
        </div>
    </div>
</template>

<script>
export default {
    name:'SlideShow'
}
</script>

<style scoped lang="scss">
.slider{
    overflow: hidden;
    width: 1170px;
    &__slides{
        width: 1170px;
        display: flex;
    flex-direction:row;
    }
    &__slide{
        width: 1170px;
        height: 780px;
        & img{
            object-fit: contain;
        }
    }
    &__navigate {
        text-align: center;
        display:flex;
    }
    &__btn{
        border:2px solid blue;
        padding:5px;
        border-radius:10px;
        cursor:pointer;
        margin:0 5px;
    }
}
</style>
