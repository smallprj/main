<template>
    <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import SlideShow from '@/components/SlideShow.vue'
import BlogCard from '@/components/BlogCard.vue'
import CategoryCards from '@/components/CategoryCards.vue'
import Footer from '@/components/Footer.vue'
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'Test',
  components: {
    Navbar,
    SlideShow,
    BlogCard,
    CategoryCards,
    Footer,
    CustomButton
    }
}
</script>