<template>
	<navbar />
	<slide-show />
	<greeting />
	<category-cards />

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import SlideShow from '@/components/SlideShow.vue'
import CategoryCards from '@/components/CategoryCards.vue'
import CustomFooter from '@/components/Footer.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import Greeting from '@/components/Greeting.vue'

export default {
  name: 'Home',
    components: {
      Navbar,
      SlideShow,
      CategoryCards,
      CustomFooter,
      ProfileCard,
			Greeting
      }
}
</script>
