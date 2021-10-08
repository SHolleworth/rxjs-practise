import { Observable, scan } from 'rxjs'

const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  subscriber.next(3)
  const intervalId = setInterval(() => {
    subscriber.next(4)
  }, 1000)

  return () => {
    clearInterval(intervalId)
    subscriber.complete()
  }
})

const subscription = observable.subscribe({
  next(x) { console.log("got value: " + x)},
  error(err) { console.log("got an error " + err)},
  complete() { console.log('done')}
})

subscription.unsubscribe()