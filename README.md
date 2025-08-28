1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:The basic difference between them is: getElementById selects one element by it's unique Id, getElementsByClassName select all elements with a specific class it's a array like object HTMLCollection, querySelector selects the first matching element and the querySelectorAll select all matching elements and it's return a nodeList.

2.How do you create and insert a new element into the DOM?

Ans:For creating a new element I will use document.createElement() and insert it into the DOM will use appendChild().

3.What is Event Bubbling and how does it work?

Ans:When a event triggered on a child element then bubbles up from the target element to its parent, grandparent, and all the way to the root of the document.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event delegation is: Instead of adding many event listeners to many child elements add one event listener to a parent element and check the click or target inside the parent. It's useful cause reduces the number of eventListener.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() is Stops the default action of browser. and the stopPropagation() Stops the event from bubbling.