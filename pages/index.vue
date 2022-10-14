<template>
  <div>
    <app-tabs :tabs="listTabs" :active-idx="activeIdx" @setIdx="activeIdx=$event" />
    <div class="flex justify-center items-center flex-col">
      <p>
        {{content[activeIdx]}}
      </p>
      <br>
      <nuxt-img :src="contentImg[activeIdx]" width="500" />
    </div>
  </div>
</template>

<script>
import AppTabs from '~/components/tabs/AppTabs';
export default {
  name: 'IndexPage',
  components: {AppTabs},
  data() {
    return {
      listTabs: ['first', 'second', 'three'],
      content: [
        'first: lorem',
        'second: lorem',
        'three: lorem',
      ],
      contentImg: [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
      ],
      activeIdx: 0
    }
  }
}
</script>
