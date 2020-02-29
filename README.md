# README.md
This is an example website that is made exploitable through a dodgy NPM package. 

```
express -c stylus -v hjs express_rce
```


```
npm install 
```

To run the webserver
```
DEBUG=vulnerability:* npm start
```

## The container.
```
docker build -t express_rce .
docker run --rm -p 8080:3000 express_rce 
```

