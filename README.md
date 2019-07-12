# spelling-bee-solver

This is a solver for the New York Times’ [Spelling Bee puzzle](https://www.nytimes.com/puzzles/spelling-bee).

## CLI

Until node fully supports native JavaScript modules, you’ll need to run the CLI with the experimental flag, like so:

```shell
$ node --experimental-modules cli.mjs l ofrnug
```

Note that the first argument (l) is the center letter and the second argument is the surrounding letters.

The output should look like this:

```javascript
[ 'flog',
  'flong',
  'floor',
  'flor',
  'flour',
  'fluff',
  'flung',
  'fluor',
  'flurr',
  'fool',
  'forlorn',
  'foul',
  'fulgor',
  'fulgour',
  'full',
  'furfurol',
  'furl',
  'furlong',
  'furol',
  'glogg',
  'glug',
  'gluon',
  'golf',
  'googol',
  'gool',
  'grrl',
  'grrrl',
  'gulf',
  'gull',
  'gurl',
  'loglog',
  'logo',
  'logoff',
  'logon',
  'logroll',
  'loll',
  'lolog',
  'long',
  'loof',
  'loofful',
  'loon',
  'loor',
  'lorgnon',
  'lorn',
  'loun',
  'lour',
  'luff',
  'lull',
  'lulu',
  'lung',
  'lungful',
  'noll',
  'nolo',
  'noul',
  'null',
  'nurl',
  'oolong',
  'orlon',
  'oulong',
  'rolf',
  'roll',
  'roul',
  'unfool',
  'unfurl',
  'unroll',
  'urnful' ]
```

## Module

The JavaScript module can be used directly:

```javascript
import solve from 'spelling-bee-solver';

const solutions = solve('l', ['o', 'f', 'r', 'n', 'u', 'g']);
```
