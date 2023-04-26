#!/usr/bin/env node
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

export const rps = (opMove) => {
    const moves = ['rock', 'paper', 'scissors']
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
                return {"player":randomMove, "opponent":opMove, "result":"error", message: "Invalid move. Please use one of the following: rock, paper, scissors."}
        }
    }
}

console.log(rps(args._[0]))