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

const foo = new Foo('Bob')

// module 2
bus.on('event', foo.printName)

foo.createEvent()




