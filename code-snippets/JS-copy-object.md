## Javascript copy object

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
### Object.assign()
```js
const copy2 = Object.assign({}, obj1, { kolmas: 3 })
```
Object.assign() copies the value of the source object(s) to the target object, which can be either a new one or an existing one, that has it's properties mutated. If target object has properties that the source objects do not have, they will not be mutated. If source objects have properties, that the target does not have, they are copied to the the target. Returns the target object.

### Spread syntax
```js
const copy3 = {
    ...obj1,
    kolmas: 3
}
```
Spread copies properties from the source object(s) to a new one.