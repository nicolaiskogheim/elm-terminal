# Example terminal cli application in Elm 1.19.1

This tiny application demonstrates one way of creating a command line utility
that reads parameters and parses them. The elm part is using the
[elm-cli-options-parser](https://package.elm-lang.org/packages/dillonkearns/elm-cli-options-parser/latest/)
of dillonkearns, and the example code (licensed under the BSD 3-Clause "New" or
"Revised" License) is pretty much yanked directly from [his example
app](https://ellie-app.com/8b8QWfcxx4Ca1). What `elm-terminal` brings to the
table is just showing how you would use dillonkearns example, or any other elm
code, for driving your terminal applications.

## Directory structure

**src**  
Elm files are located in `src/`, as per Elm project best practices guidelines.

**bin**  
Compiled Elm code is put in `bin`. The tiny amount of node code required to
interface with the Terminal is in `bin/index.js`. You should not need to edit
this file.

## Setup / prerequisites

- Have node and yarn.
- Run `yarn` to install dependencies
- Run `yarn build` to compile Elm.

## Developing

- Edit Elm code in `src` as if it was a regular elm web app.
- Optionally edit the wrapper written in nodejs, in `bin/index.js`.
- Run `yarn build` to compile elm.

## Run

`yarm telm` will run the command.

Alternatively, use `npm install -g .` to install the commands listed under
`bin` in `package.json`. You can then run the command as `telm`. (Someone
please tell me how to do `npm install -g .` with yarn so I don't have to use
two package managers).
