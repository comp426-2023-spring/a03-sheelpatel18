#!/usr/bin/env node
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h) {
    console.log(`Usage: node-rpsls [SHOT]
    Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
    
      -h, --help        display this help message and exit
      -r, --rules       display the rules and exit
    
    Examples:
      node-rpsls        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
      node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
}

if (args.r) {
    console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`)
}

export const rps = (opMove) => {
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomMove = moves[Math.floor(Math.random() * moves.length)]
    if (!opMove) {
        return {"player":randomMove}
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
                if (opMove === 'lizard') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'spock') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
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
                if (opMove === 'lizard') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'spock') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
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
                if (opMove === 'lizard') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'spock') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
            case 'lizard':
                if (opMove === 'rock') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'paper') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'scissors') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'lizard') {
                    return {"player":randomMove, "opponent":opMove, "result":"tie"}
                }
                if (opMove === 'spock') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
            case 'spock':
                if (opMove === 'rock') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'paper') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'scissors') {
                    return {"player":randomMove, "opponent":opMove, "result":"win"}
                }
                if (opMove === 'lizard') {
                    return {"player":randomMove, "opponent":opMove, "result":"lose"}
                }
                if (opMove === 'spock') {
                    return {"player":randomMove, "opponent":opMove, "result":"tie"}
                }
            default:
                return {"player":randomMove, "opponent":opMove, "result":"error", message: "Invalid move. Please use one of the following: rock, paper, scissors, lizard, spock."}
        }
    }
}

console.log(rps(args._[0]))