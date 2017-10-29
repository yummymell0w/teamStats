let team = {
    _players: [{firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11}],
    _games: [{opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27}],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName,lastName,age) {
        let player = {
           firstName: firstName,
           lastName: lastName,
           age: age
        };
        this._players.push(player);
    }
};
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',42);
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
