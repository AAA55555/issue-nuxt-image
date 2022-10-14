<template>
  <div>
    <p>ActiveIdx: {{activeIdx}}</p>
    <ul>
      <li v-for="(tab, idx) in tabs" :key="tab+idx" @click="$emit('setIdx', idx)">{{tab}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppTabs',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeIdx: {
      type: Number,
      required: true
    }
  }
}
</script>
