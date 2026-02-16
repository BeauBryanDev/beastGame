const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const players = [] ;

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.playerID = `man${Math.floor(Math.random() * 1000)}`;
  }

  updateScore(points) {
    this.score += points;
  }
}
app.use(cors());
app.use(express.json());

app.get('/joinGame' , (req, res) => {
    const playerID = `man${Math.floor(Math.random() * 1000)}`;
  players.push(playerID);
  console.log(`Player ${playerID} joined the game`);
  const player = new Player(playerID);
  players.push(player);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '3600');
  res.send(`Player ${playerID} joined the game`);
  console.log(`Player ${playerID} joined the game`);
  console.log("Player joined the game");
  res.send('Hello World!');
  console.log("Player joined the game");
}
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}
);


console.log("Hello, world!");
console.log("This is a test.");

