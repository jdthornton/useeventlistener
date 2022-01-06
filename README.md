# @jdthornton/useeventlistener

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/useeventlistener.svg)](https://www.npmjs.com/package/@jdthornton/useeventlistener)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/useeventlistener.svg)](https://www.npmjs.com/package/@jdthornton/useeventlistener)

React event listener hook.

## Install

```
$ npm install @jdthornton/useeventlistener
```

## Usage

```js
import useEventListener from "@jdthornton/useeventlistener";

function App({
  isListening,
  el = window
}){

  const handleScroll = (e) => {
    console.log("window scroll event", e)
  };

  // Listens to the window scroll event if isListening is true
  useEventListener(
    isListening ? "scroll" : null,
    handleScroll,
    el
  )

  return null
}
```
