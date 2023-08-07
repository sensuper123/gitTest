<template>
    <div>
        <nav-header></nav-header>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '@/components/NavFooter.vue';
import NavHeader from '@/components/NavHeader.vue';
export default {
    components: {
        NavFooter,
        NavHeader
    }
}   
</script>

<style lang="scss" scoped></style>