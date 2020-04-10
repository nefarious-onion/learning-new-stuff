### Javascript copy object

```js
const obj1 = {
    eka: 1,
    toka: 2
}
```
```js
const copy1 = {
    eka: obj1.eka,
    toka: obj1.toka,
    kolmas: 3
}
```
```js
const copy2 = Object.assign({}, obj1, { kolmas: 3 })
```
```js
const copy1 = {
    ...obj1,
    kolmas: 3
}
```