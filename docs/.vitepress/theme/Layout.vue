<script setup lang="ts">
import { provide, onMounted, watch } from 'vue'
import { useRouter  } from 'vitepress'
import { useSidebar, useCloseSidebarOnEscape } from './composables/sidebar'
import VPSkipLink from './components/VPSkipLink.vue'
import VPBackdrop from './components/VPBackdrop.vue'
import VPNav from './components/VPNav.vue'
import VPLocalNav from './components/VPLocalNav.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPContent from './components/VPContent.vue'
import VPFooter from './components/VPFooter.vue'

import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)

onMounted(() => {
   initCommit()
})

const router = useRouter();
watch(() => router.route.data.relativePath, (path) => {
  console.log(path)
  initCommit()
});

const initCommit = () => {
   const id = location.pathname.replace('.html', '')
    const gitalk = new Gitalk({
      clientID: '6722bd665d1907893916',
      clientSecret: 'ab854ba77675e7fa7c38cc416feede40f2cb2159',
      repo: 'tommyhume_message',
      owner: 'freedomdebug',
      admin: ['freedomdebug'],
      // number: 1,
      id,      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })

    gitalk.render('gitalk-container')
}
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav />
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" />

    <VPContent>
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" />
        <div id="gitalk-container"></div>
      </template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </VPContent>
    <VPFooter />
    <slot name="layout-bottom" />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
