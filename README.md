# steps

1. build a server using express-generator port 3001
2. build a client using create-react-app port 3000 (default)
3. modify client's package.json and add "proxy": "http://localhost:3001".

> what is proxy? This works as a redirect to any React app request that are not static asset. A good place to indicate the server url
