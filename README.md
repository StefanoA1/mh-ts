# Ondorse: Technical Test

## Index

  - [How to run this app](#How-to-run-this-app)
    - [Install node/nvm](#Install-node/nvm)
    - [Install dependencies](#Install-node/dependencies)
    - [Start the server](#Start-the-server)
  - [Test context & requirements](#Test-context-&-requirements)
  - [Tools](#Tools)

## How to run this app

### Install node/nvm

([Node 20](https://nodejs.org/en/download) is required) nvm is the preferred method for this project, you can follow the instructions to install nvm [here](https://github.com/nvm-sh/nvm).  
**In case nvm is not used, make sure your node version is v20.**

Once installed, run the following command:
```
nvm use
```
This will detect the node version provided on the .nvmrc file automatically, if this version is not available locally,
you'll get:
`N/A: version "v20 -> N/A" is not yet installed. You need to run "nvm install v20" to install it before using it.`,
to solve this, tun this command:
```
nvm install v20
```

### Install dependencies

Run `npm ci` for a clean install.


### Start the server

Run `npm start`, this will launch the server on Port 3000 (by default).
If a specific port is needed (ex: 6550), then you can run `PORT=6550 npm start`.

### Running tests, typecheck and linting

For running:
- The whole suite (lint + typecheck, unit, integration), use: `npm run test`
- Unit tests only, use: `npm run test:unit`
- Integration tests only, use: `npm run test:integration`
- Lint: `npm run lint`
- Lint fix: `npm run lint:fix`
- Typecheck: `npm run typecheck`

## Test context & requirements

TODO

## Tools

- Typescript over express for the server and code.
- Ava for testing.
- Under a permissive MIT License.
- Eslint.
