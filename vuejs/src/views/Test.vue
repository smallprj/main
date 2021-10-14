<template>
    <div>
        <p>This is test page</p>
        <Navbar />
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Test',
  components: {
    Navbar
    }
}
</script>