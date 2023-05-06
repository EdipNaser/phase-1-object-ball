function gameObject(){
    const arr = {
      home : {TeamName : "Brooklyn Nets", colors : ["Black", "White"], players : {
        "Alan Anderson" : {nymber : 0,Shoe : 16, Points : 22,
                           Rebounds : 12, Assists : 12, Steal : 3,
                            Blocks : 1, "Slam Dunks" : 1},
        "Reggie Evans" : {nymber : 30,Shoe : 14, Points : 12,
                           Rebounds : 12, Assists : 12, Steal : 12,
                            Blocks : 12, "Slam Dunks" : 7}},
        "Brook Lopez" : {nymber : 11,Shoe : 17, Points : 17,
                           Rebounds : 19, Assists : 10, Steal : 3,
                            Blocks : 1, "Slam Dunks" : 15},
        "Mason Plumlee" : {nymber : 1,Shoe : 19, Points : 26,
                           Rebounds : 12, Assists : 6, Steals : 3,
                            Blocks : 8, "Slam Dunks" : 5},
        "Jason Terry" : {nymber : 31,Shoe : 15, Points : 19,
                           Rebounds : 2, Assists : 2, Steals : 4,
                            Blocks : 11, "Slam Dunks" : 1},},
        
      away : {TeamName : "Charlotte Hornets", colors : [ "Turquoise", "Purple"], players : {
        "Jeff Adrien" : {nymber : 4,Shoe : 18, Points : 10,
                           Rebounds : 1, Assists : 1, Steal : 2,
                            Blocks : 7, "Slam Dunks" : 2},
        "Bismak Biyombo" : {nymber : 0,Shoe : 16, Points : 12,
                           Rebounds : 4, Assists : 7, Steal : 7,
                            Blocks : 15, "Slam Dunks" : 10} ,
        "DeSagna Diop" : {nymber : 2,Shoe : 14, Points : 24,
                           Rebounds : 12, Assists : 12, Steal : 4,
                            Blocks : 5, "Slam Dunks" : 5},
        "Ben Gordon" : {nymber : 8,Shoe : 15, Points : 33,
                           Rebounds : 3, Assists : 2, Steals : 1,
                            Blocks : 1, "Slam Dunks" : 0},
        "Brendan Haywood" : {nymber : 33,Shoe : 15, Points : 6,
                           Rebounds : 12, Assists : 12, Steals : 22,
                            Blocks : 5, "Slam Dunks" : 12}}}

        
      }
    return arr 
}



function numPointsScored (playerName){
    const game = gameObject()
    for(let teamObj in game){
        const playersNames = game[teamObj].players
        for (let player in playersNames) {
            if (player === playerName) {
                return playersNames[player].Points
            }
        }
            
    }
    return null

}

function shoeSize (playerName) {
    const game = gameObject()
    for (let teamObj in game){
        const playersObj = game[teamObj].players
        for (let player in playersObj){
            if (player === playerName){
                return playersObj[player].Shoe
            }
        }
    }
    return null
}

function teamColors(team){
    const game = gameObject()
    if (game.home.TeamName === team){
        return game.home.colors
    } else if (game.away.TeamName === team){
        return game.away.colors
    }else {
        return "invalid team name!"
    }
}

function teamNames(){
    const game = gameObject()
    let teams = []
    for(let team in game) {
        teams.push(game.team.TeamName)
    
}
    return teams
}

function playerNumbers(teamN) {
    const team = gameObject()[teamN]
    const numbers = [];
  
    for (const player in team.players) {
      numbers.push(team.players[player].nymber);
    }
  
    return numbers;
  }



function playerStats(playerN){
    const game = gameObject()
    for (let team in game) {
        const players = game[team].players
        for (let player in players){
            if (player === playerN) {
                return players[player]
            }
        }
    }
    return null
  }

  function bigShoeRebounds() {
    let biggestShoeSize = 0;
    let numRebounds;
    const game = gameObject()
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].Shoe > biggestShoeSize) {
          biggestShoeSize = game[team].players[player].Shoe;
          numRebounds = game[team].players[player].Rebounds;
        }
      }
    }
  
    return numRebounds;
  }
  
  
  
  
