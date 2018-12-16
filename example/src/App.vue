<template>
  <div id="app">
  
    <List :list="lista" />

  </div>
</template>

<script>
import { tagComponent, btn, List,Title } from '../../src/index'

export default {
  name: 'app',
  data: () => ({
    lista:['leo', 'yami', 'tibe']
  }),
  components: {
    tagComponent,
    btn,
    List,
    Title
  }
}
</script>
