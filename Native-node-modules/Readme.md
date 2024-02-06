Native node modules are modules written in C or C++ that can be loaded into Node.js using the require() function¹. They are also called addons². Native modules can provide faster performance and access to lower-level APIs than JavaScript modules³. However, they also require more effort to write, compile, and maintain³.

Some examples of built-in native modules are http, fs, and os². You can also create your own local native modules or use third-party native modules from npm²³. To use a native module, you need to import it with the require() function and assign it to a variable, like this:

```js
const someVariable = require('nameOfModule')
```

You can then use the variable to access the properties and methods of the native module². For example, to create a server with the http module, you can do this:

```js
const http = require('http')
server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!')
})
server.listen(3000)
```

sources:
(1) What is the definition for "native" in Nodejs? - Stack Overflow. https://stackoverflow.com/questions/24949108/what-is-the-definition-for-native-in-nodejs.
(2) What Are Node Modules and How Do You Use Them? - freeCodeCamp.org. https://www.freecodecamp.org/news/what-are-node-modules/.
(3) Writing Native Node.js Modules - RisingStack Engineering. https://blog.risingstack.com/writing-native-node-js-modules/.
(4) undefined. http://nodejs.org/api/addons.html.
(5) tr.wikipedia.org. https://tr.wikipedia.org/wiki/Node.js.