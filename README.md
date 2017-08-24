demo: https://calorie-tracker-smn.herokuapp.com/ 

To start:

```bash
$ npm install
```

```bash
$ npm install -g json-server
```
Then change "host" at /client/store/store.js to "http://localhost:3000" (or whatever port your json-server is using)
```
$ json-server —watch userData.json //simultaneously with the npm run 
```

To develop:

```bash
$ npm run dev
```

To build for production:

```bash
$ npm run build
```

To lint you code:

```bash
$ npm run lint
```

to be added:

1. food data (may use an external api, but we'll see)
2. real server instead of json-server?
