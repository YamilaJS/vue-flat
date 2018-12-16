<template>
  <div id="app">
    <tag-component text="example text"></tag-component>
    <btn />
    <List/>
  </div>
</template>

<script>
import { tagComponent, btn, List } from '../../src/index'

export default {
  name: 'app',
  components: {
    tagComponent,
    btn,
    List
  }
}
</script>
