#!/usr/bin/env node
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

// if -h is passed, console.log "TEST"
if (args.h) {
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`)
}

if (args.r) {
    console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
}

export const rps = (opMove) => {
    const moves = ['rock', 'paper', 'scissors']
    const randomMove = moves[Math.floor(Math.random() * moves.length)]
    if (!opMove) {
        return {'player':randomMove}
    } else {
        switch (randomMove) {
            case 'rock':
                if (opMove === 'paper') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'scissors') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'rock') {
                    return {"player":randomMove, "opponent":opMove, "result":"tie"}
                }
            case 'paper':
                if (opMove === 'scissors') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'rock') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'paper') {
                    return {"player":randomMove, "opponent":opMove, "result":"tie"}
                }
            case 'scissors':
                if (opMove === 'rock') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'paper') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'scissors') {
                    return {"player":randomMove, "opponent":opMove, "result":"tie"}
                }
            default:
                console.error(`${opMove} is out of range.`)
                console.log(`Rules for Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`)
    break;  
        }
    }
}

console.log(rps(args._[0]))