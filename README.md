# letswait

letswait is a Nodejs module to wait syncronously in a non-blocking manner for a certain duration of time.

You probably don't need this. Feel free to use it if you wish.

## Installation

Use the node package manager (npm) to install letswait

```bash
npm i letswait
```

## Usage

```
const letswait = require ("letswait");

await letswait.forMSeconds (1000); // Time in milliSeconds
await letswait.forSeconds (1); // Time in seconds
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](http://opensource.org/licenses/ISC)
