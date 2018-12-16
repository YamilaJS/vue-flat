<template>
  <div id="app">
    <tag-component text="example text"></tag-component>
    <btn />
    <List :list="lista" />
  </div>
</template>

<script>
import { tagComponent, btn, List } from '../../src/index'

export default {
  name: 'app',
  data: () => ({
    lista:['leo', 'yami', 'tibe']
  }),
  components: {
    tagComponent,
    btn,
    List
  }
}
</script>
