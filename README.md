# Nock

## A Very Short Introduction

Nock is awesome, it allows you to mock an API request from an external server

## Install

```
$ npm i nock
```

## Mock A Response

```javascript
nock("https://pokeapi.co/")
    .get("/api/v2/pokemon/pikachu/")
    .reply(200, "Pika Pi!", { pika: "pi" });
```

## Repeat X Times

```javascript
nock("http://www.google.com")
    .get("/pikachu")
    .times(3)
    .reply(200, "Pika Pi!");

http.get("http://www.google.com"); // respond body "Pika Pi!""
http.get("http://www.google.com"); // respond body "Pika Pi!
http.get("http://www.google.com"); // respond body "Pika Pi!""
http.get("http://www.google.com"); // Regular Google response :(
```

### Full documentation

https://www.npmjs.com/package/nock
