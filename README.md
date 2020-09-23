**`A better output for your express rest-apis 🎉`**
## Getting Started

**`1`** Install the package

```bash
npm i express-rest-schema
```

**`2`** Import it into your file

```js
const Reponse = require('express-rest-schema') 
```

**`3`** return response of your routes like this

```js
router.get('/user/1', (req, res) => {
    return Reponse(res,  // send the response object
        { // optional parameters
            status: 200,
            response: {
                id: 1,
                name: 'John Doe'
            },
            message: 'All is well!!!',
            error: throw new Error('optional error object')
        }
    )
})
```

**`4`** See the beautiful result! 😉
