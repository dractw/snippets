<main>
<button v-on:click="sort = !sort">Sort</button>
<button v-on:click="odd = !odd">Odd</button>

<div
    v-for="(element, index) in filteredElements"
    :key="`element-${index}`"
    :value="element"
/>
</main>

<script>

export default {
  name: 'Template',

  data: () => ({
    odd: true, // true as odd, false as even
    sort: true, // true as DESC, false as ASC
    elements: [...Array(20).keys()]
  }),

  computed: {
    filteredElements () {
      return this.elements
          .filter((el) => this.odd ? el % 2 : el % 2 === 0)
          .sort((a, b) => this.sort ? b - a : a - b)
    }
  },
}
</script>

