import EventEmitter from 'events'

const bus = new EventEmitter()

class Foo {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  printName () {
    console.log(this.name)
  }

  createEvent () {
    bus.emit('event')
  }
}

// module 2
const foo = new Foo('Bob')

bus.on('event', foo.printName)

foo.createEvent()




