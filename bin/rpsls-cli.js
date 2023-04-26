#!/usr/bin/env node
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

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