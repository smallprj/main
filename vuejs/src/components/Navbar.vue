<template>
    <div class='nav'>
        <div class='nav__left'>
            <span>Instructables picture</span>
            <div>
                <input class='nav__search' type="Seach" placeholder="Search...">
            </div>
        </div>
        <div class='nav__right'>
            <div>
                <button class="nav__btn nav__btn--yellow">Log In</button>
                <button class="nav__btn nav__btn--blue">Register</button>
            </div>
            <div>
                <router-link class="nav__link" to="#">Home</router-link>
                <router-link class="nav__link" to="#">Category</router-link>
                <router-link class="nav__link" to="#">About</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Navbar'
}
</script>

<style scoped lang="scss">
.nav{
    background-color: $dim-gray;
    width:100%;
    height: 60px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding: 0 2rem;
    box-sizing:border-box;
    position: fixed;
    &__left {
        display: flex;
        flex-direction:row;
        align-items:center;
    }
    &__right {
        display: flex;
        flex-direction:row;
        align-items:center;
    }
    &__search {
        height: 35px;
        background-color: #DBD7D7;
        outline: none;
        border-radius: 1.5rem;
        border:0;
        padding: 0 1rem;
        margin: 0 1rem;
        font-size: 1rem;
    }
    &__btn {
        border:0;
        border-radius:0.5rem;
        border:0;
        padding:0.5rem 1rem;
        font-weight: 600;
        color:$black;
        margin: 0 1rem;
        &--yellow {
            background-color:$yellow-pastel;
        }
        &--blue {
            background-color:$blue-pastel;
        }
    }
    &__link {
        text-decoration:none;
        color:$black;
        margin: 0 0.8rem;
    }
}
</style>