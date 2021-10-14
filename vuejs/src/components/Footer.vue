<template>
    <footer class="footer">
        <div class="footer__btn">
            <CustomButton text="About" green/>
            <CustomButton text="Contact" blue/>
            <CustomButton text="Terms" yellow/>
        </div>
        <div class="footer__privacy">
            <span>Terms of Service | Privacy Statement | Privacy settings | Legal Notices & Trademarks</span>
        </div>
    </footer>
</template>

<script>
import CustomButton from './CustomButton.vue'
export default {
  name: 'Footer',
  components:{
      CustomButton
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
    position: fixed;
    left:0;
    bottom:0;
    width: 100%;
    height: 12rem;
    background-color: $dim-gray;
    padding: 3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__btn{
        width: 70%;
        margin-right:auto;
        margin-left:auto;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &__privacy {
        box-sizing: content-box;
        padding-top: 1rem;
        text-align: center;
        border-top: 1px solid $black;
    }
}
</style>
