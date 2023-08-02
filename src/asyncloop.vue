<template>
  <main>
    <div> {{ greet }} </div>
  </main>
</template>


<script>

// some exported module
const loopSize = 100

const awaitFunction = (index) => new Promise((resolve) => resolve(index))

export default {
  name: 'NestedComponent',

  data: () => ({
   greet: 'Hello world'
  }),

  methods: {
    async asyncLoop (str) {
      for (let index = 0; index < loopSize; index += 1) {
        await awaitFunction(`${str}-index`)
      }

      setTimeout(() => this.asyncLoop(str), 10 * 60 * 1000)
    }
  },

  mounted () {
    this.asyncLoop(this.greet)
  }
}
</script>

