author-name
===========
a library for author name parsing.

usage
======
```javascript
var AuthorName = require('author-name');
var andrea = new AuthorName('Jingyun Andrea Huang');
// andrea.lastName = 'Huang';
// andrea.firstName = 'Jingyun';
// andrea.middleName = 'Andrea';

// andrea.shortName() = 'Huang JA';
// andrea.fullName(false) = 'Huang, Jingyun Andrea';
// andrea.fullName(true) = 'Jingyun Andrea Huang';

```