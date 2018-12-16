export default {
  name: 'list',
  components: {},
  props: {
    firstName: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onClickItemHandler (index = 0, value = '') {
      this.$emit('onClickItemEvent', { index: index, value: value })
    }
  }
}
