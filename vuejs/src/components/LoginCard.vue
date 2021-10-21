<template>
  <div class="login-card">
    <form class="login-card__login">
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Password">
      <CustomButton text="Log In" blue @btnClicked="click"/>
    </form>
    <div>
      <span>Or</span>
    </div>
    <form class="login-card__register">
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Password">
      <CustomButton text="Register" green />
    </form>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
export default {
  name: "LoginCard",
  components: {
    CustomButton
  },
  methods:{
    click: function (data) {console.log(data)}
  }
}
</script>

<style scoped lang=scss>
.login-card{
  padding: 2rem;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 1px black solid;
  border-radius: 10px;
  & input {
    background-color: $dim-gray;
    width: 80%;
    padding: 0.7rem;
    margin-bottom: 0.5rem;
    border-radius:0.2rem;
    border: 1px solid gray;
    }
  & button {
    padding: 0.7rem 1rem;
  }
  &__login {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__register {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>