1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById(), getElementByClassName(), querySelector() and querySelectorAll() are renowned DOM methods. Here are few different among them below: 

i. getElementById() usually returns a single element and returns null if no element id matches the given id. getElementByClassName() usually returns a live HTMLCollection of all element matched the class name and returns an empty collection if none are found. querySelector( ) usually returns the first matched element and returns null if no found. And querySelectorAll() usually returns a static nodelist of all node matched the css selector and returns an empty nodelist if none are found.

ii. getElementById() and getElementByClassName() can’t use css selectors but querySelector() and querySelectorAll() can use css selectors.

iii. getElementById() and querySelector() returns a single element whereas getElementByClassName() and querySelectorAll() returns an array-like object.

iv. Only querySelectorAll() supports forEach() directly. 



2. How do you create and insert a new element into the DOM?

To create a new element into the DOM we can use document.createElement() method. 

For example:-

const newElement = document.createElement(‘div’);
```html
newElement.innerHTML =`
<h1>Title</h1>
<p>paragraph text.</p>
// multi-line html can be inserted using backticks.
`
```
//inserting new element into existing element.

const container = document.getElementById(‘container’);
container.appendChild(newElement);



3. What is Event Bubbling? And how does it work?

Event Bubbling is a DOM mechanism where an event starts from the target element and propagates upward to its parent elements.

The HTML structure: 
```html
<div id="parent">
<button id="child">Click Me</button>
</div>
```
And the JavaScript:

document.getElementById("child").addEventListener("click", function() {
console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
console.log("Parent clicked");
});

When the event occurs (for this example the button is clicked) the event begins at the button (with child id) and log "Child clicked" in the console. Then it jumps up to the parent (the div with parent id) and log "Parent clicked". The event can be continued by setting up more event listeners to parent elements like body, html and document. 












4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where a single parent element listens for events on its child elements, taking advantage of event bubbling to handle multiple child events efficiently.

The HTML structure:

```html
<ul id="item-list">
  <li class="item">Home</li>
  <li class="item">About</li>
  <li class="item">Services</li>
  <li class="item">Contact</li>
</ul>
```
And the JavaScript:

document.getElementById(‘item-list’).addEventListener(‘click’, function (event) {

console.log(event.target);

})

When the event occurs by clicking a particular li element the element logged into the console. we don’t have to use individual event listeners to all the li elements.

Benefits of Event Delegation:

i.	Requires less event listeners.
ii.	Can work with dynamic elements too.
iii.	Improve readability and easier to maintain.









5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() method prevents the default action or behavior of the element but does not affect the event bubbling. Whereas stopPropagation() method stops the event from rising up to the parent element but does not cause any hindrance to default action of the element.
