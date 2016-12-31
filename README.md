# React-Portal (lite)

[![Travis](https://img.shields.io/travis/newyork-anthonyng/react-portal-lite.svg)](https://travis-ci.org/newyork-anthonyng/react-portal-lite)
[![Codecov](https://img.shields.io/codecov/c/github/newyork-anthonyng/react-portal-lite.svg)](https://codecov.io/gh/newyork-anthonyng/react-portal-lite)
[![license](https://img.shields.io/npm/l/react-portal-lite.svg)](https://spdx.org/licenses/MIT)

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
