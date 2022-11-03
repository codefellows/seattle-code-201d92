# Class 09 Lecture Notes

## Events

### Browser Event Types
- click
- submit (when a form button is clicked)
- hover
- mouseover
- page load

## JavaScript - Code: Event Listener
- Code will triggered when the event has fired/been raised
- Targets some HTML element that it listens to

```js
let myContainer = document.getElementByID('my-continer');
```

- Specify the type of event to listen to
- Specify which function is called

```js
myContainer.addEventListener('click', handleClick);
```

## JavaScript - Code: Event Handler - Callback Function
- Logic that is run when your event fires
- The function that is called by your event listener

```js
function handleClick(event) {
  // do some stuff
}
```
