#!/usr/bin/env node

const elm = require("./cli.js")
const argv = require('process').argv;
const Elm = elm.Elm;

const argsToAppend = argv.slice(2);
const args = ['', ...argsToAppend]

let program = Elm.Cli.init({
    flags: {
        argv: args,
        versionMessage: '1.0.0'
    }
})

function printMessage(msg, style) {
    console.log(msg);
}

program.ports.print.subscribe(message => {
    printMessage(message, 'plain');
});

program.ports.printAndExitSuccess.subscribe(message => {
    printMessage(message, 'exit-success');
})
program.ports.printAndExitFailure.subscribe(message => {
    printMessage(message, 'exit-failure');
})

