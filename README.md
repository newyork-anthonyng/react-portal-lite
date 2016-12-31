# React-Portal (lite)

A lightweight component that transports HTML elements to the end of `document.body`.

```javascript
<Transport isOpen>
	<h1>Hello World</h1>
</Transport>

// The H1 element will be appended to the end of document.body
```

# API
| Property | Description |
| -------- | ----------- |
| isOpen   | Accepts a boolean. If true, the element will be removed from the normal HTML flow and appended to the end of `document.body`. If false, nothing will render. |
| children | A single React element that will be appended to the end of `document.body`. |
