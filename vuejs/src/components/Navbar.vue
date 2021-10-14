<template>
    <div class='nav'>
        <div class='nav__left'>
            <span>Instructables picture</span>
            <div>
                <input type="Seach">
            </div>
        </div>
        <div class='nav__right'>
            <div>
                <button>Log In</button>
                <button>Register</button>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Category</a>
                <a href="#">About</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Navbar'
}
</script>

<style lang="scss">
.nav{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    &__left{
        display: flex;
        flex-direction:row;
    }
    &__right{
        display: flex;
        flex-direction:row;
    }
}
</style>