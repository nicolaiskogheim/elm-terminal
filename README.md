# Example terminal cli application in Elm

This tiny application demonstrates one way of creating a command line utility
that reads parameters and parses them.

## src

Elm files are located in `src/`, as per Elm project best practices guildelines.

## bin

Compiled Elm code is put im `bin`. The tiny amount of node code required to
interface with the Terminal is in `bin/index.js`. You should not need to edit
this file.

## Setup / prerequisites

- Have node and yarn
- Run `yarn` to install dependencies
- Run `yarn build` to compile Elm.

## Developing

- Edit Elm code in `src` as if it was a regular web elm app.
- Run `yarn
