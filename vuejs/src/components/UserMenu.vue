<template>
  <div class="user-menu">
    <div class="user-menu__link">
      <div>
        <router-link class="nav__link" to="#">Profile</router-link>
        <router-link class="nav__link" to="#">Newfeed</router-link>
        <router-link class="nav__link" to="#">Favorites</router-link>
        <router-link class="nav__link" to="#">Settings</router-link>
      </div>
      <custom-button text="Logout"/>
    </div>
    <div class="user-menu__create">
      <div>
        <span>Instructable 0</span>
        <span>Draft 0</span>
      </div>
      <custom-button text="New Instructable" orange/>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'
export default {
  components: { CustomButton },
  name: "UserMenu"
}
</script>

<style scoped lang="scss">
.user-menu {
  width: 300px;
  border: 1px solid gray;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &__link {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 1rem;
    & div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    & a {
      text-decoration: none;
      color: gray;
      &:hover {
        color: black;
      }
    }
  }
  &__create {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & div {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>