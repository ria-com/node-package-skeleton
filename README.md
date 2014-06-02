node-package-skeleton
=====================

A skeleton nodejs package with basic structure


quick start
===========

**Edit the default package.json file:**

(example fragment of package.json file):

```javascript
"dependencies": {
    "node-package-skeleton": "git://github.com/ria-com/node-package-skeleton.git#master"
}
```

**Install the package:**

    my-project-dir$ npm install

**Use in the project:**

```javascript
    var hello = require('node-package-skeleton');

console.log(hello('world'));
```

testing
=======
    node-package-skeleton-module-dir$ npm install
    node-package-skeleton-module-dir$ npm test
