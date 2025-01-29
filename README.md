# batcave2

React based single page app designed to talk to batcave-api backend to trigger the garage door opener.

# Using
* React
* TypeScript
* Vite

## Prerequisites
* nvm
* latest version of node and npm 
* yarn (why version 1.x instead of 2.x, well that was a mistake, and modern yarn was
  not playing nicely with bootstrap, so in retrospec, it probably would have been 
  better to just go with npm for package management)

## How we got started
```
corepack enable
yarn create vite
```
Selecting the options for react and typescript (skipping SWC for now).
```
cd batcave2
yarn 
yarn dev
```
Go to http://localhost:5173/ and confirm the app is running. If at this point
`yarn create vite` is still creating the app using react18, go ahead and upgraded
to the latest version of react
```bash
yarn add react@19
yarn add react-dom@19
yarn add @types/react-dom@19
yarn add @types/react@19
yarn add --dev eslint-plugin-react
```

## Expanding the ESLint configuration

Updated eslint.config.js per the autogenerated recommendations.
## Auth0 integration
see `.env.example` for the necessary values required and the read the example docs at
https://auth0.com/docs/quickstart/spa

## Installing on Raspberry PI
* Follow instructions at https://caddyserver.com/docs/install#debian-ubuntu-raspbian for installing **caddy**
* Build for the pi
```
yarn build --mode pi
```
* tar up and move to pi
```
cd dist
tar -cvf batcave2.tar .
scp batcave2.tar batman@{pi_ip}:
cd ../caddy
scp Caddyfile batmain@{pi_ip}:
```
* back on the pi
```
cd /srv
sudo mkdir batcave2
cd batcave2
tar -xvf /home/batman/batcave2.tar
cd ~
curl localhost:2019/load -H "Content-Type: text/caddyfile" --data-binary @Caddyfile
curl localhost:2019/config/
curl localhost:2015
```
