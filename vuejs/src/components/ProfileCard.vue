<template>
    <div class="profile-card">
        <div class="profile__wrapper">
            <div class="profile">
                <div class="profile__info">
                    <div class="profile__ava">
                        <img src="https://images.unsplash.com/photo-1608128107651-c9107fe4ade7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80" alt="">
                    </div>
                    <div class="profile__desc">
                        <h2>User name</h2>
                        <div>
                            <CustomButton text="Edit Profile" />
                            <CustomButton text="Edit Profile" />
                            <CustomButton text="Edit Profile" />
                        </div>
                        <div>
                            <p>May be</p>
                            <p>some info</p>
                            <p>could be put</p>
                            <p>here!</p>
                        </div>
                    </div>
                </div>
                <p>Joined at 10th September, 2021</p>
            </div>
        </div>
        <div class="">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-card{
    width:100%;
}
.profile{
    &__wrapper{
        width: 100%;
        border-bottom: 1px solid $dim-gray;
    }
    width:70%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap:2rem;
    &__info{
        display: flex;
        flex-direction: row;
        gap: 5rem;
        justify-content: center;
    }
    &__ava{
        width:300px;
        height:300px;
        overflow: hidden;
        border-radius: 1.2rem;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

}
</style>


<script>
import CustomButton from '@/components/CustomButton.vue'
export default {
    name: 'ProfileCard',
    components:{
        CustomButton
    }
}
</script>