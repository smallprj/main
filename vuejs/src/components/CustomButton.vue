<template>
    <button class='btn'
        @click.prevent="$emit('btnClicked')"
        :class="{
            'btn--green':green,
            'btn--yellow':yellow,
            'btn--blue':blue,
            }"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
  name: 'CustomButton',
  data(){
    return{
      data: "ui zoi oi"
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    green: Boolean,
    yellow: Boolean,
    blue: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn{
    padding: 0.5em 1.2rem;
    border:0;
    border-radius: 0.5rem;
    &--green{
        background-color: $green-pastel;
    }
    &--blue{
        background-color: $blue-pastel;
    }
    &--yellow{
        background-color: $yellow-pastel;
    }
}
</style>
