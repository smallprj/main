<template>
    <ProfileCard />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import SlideShow from '@/components/SlideShow.vue'
import BlogCard from '@/components/BlogCard.vue'
import CategoryCards from '@/components/CategoryCards.vue'
import Footer from '@/components/Footer.vue'
import CustomButton from '@/components/CustomButton.vue'
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  name: 'Test',
  components: {
    Navbar,
    SlideShow,
    BlogCard,
    CategoryCards,
    Footer,
    CustomButton,
    ProfileCard
    }
}
</script>