'use strict';

var piece11 = {type:"King", location: 4}
var piece21 = {type:"Queen", location: 5}
var piece31 = {type:"Bishop", location: 3}
var piece41 = {type:"Bishop", location: 6}
var piece51 = {type:"Knight", location: 2}
var piece61 = {type:"Knight", location: 7}
var piece71 = {type:"Rook", location: 1}
var piece81 = {type:"Rook", location: 8}
var piece91 = {type:"Pawn", location: 9}
var piece101 = {type:"Pawn", location: 10}
var piece111 = {type:"Pawn", location: 11}
var piece121 = {type:"Pawn", location: 12}
var piece131 = {type:"Pawn", location: 13}
var piece141 = {type:"Pawn", location: 14}
var piece151 = {type:"Pawn", location: 15}
var piece161 = {type:"Pawn", location: 16}

  var player1 = []

    player1.push(piece11 = {type:"King", location: 4})
    player1.push(piece21 = {type:"Queen", location: 5})
    player1.push(piece31 = {type:"Bishop", location: 3})
    player1.push(piece41 = {type:"Bishop", location: 6})
    player1.push(piece51 = {type:"Knight", location: 2})
    player1.push(piece61 = {type:"Knight", location: 7})
    player1.push(piece71 = {type:"Rook", location: 1})
    player1.push(piece81 = {type:"Rook", location: 8})
    player1.push(piece91 = {type:"Pawn", location: 9})
    player1.push(piece101 = {type:"Pawn", location: 10})
    player1.push(piece111 = {type:"Pawn", location: 11})
    player1.push(piece121 = {type:"Pawn", location: 12})
    player1.push(piece131 = {type:"Pawn", location: 13})
    player1.push(piece141 = {type:"Pawn", location: 14})
    player1.push(piece151 = {type:"Pawn", location: 15})
    player1.push(piece161 = {type:"Pawn", location: 16})

console.log(player1[3].location)




var piece12 = {type:"King", location: 4}
var piece22 = {type:"Queen", location: 5}
var piece32 = {type:"Bishop", location: 3}
var piece42 = {type:"Bishop", location: 6}
var piece52 = {type:"Knight", location: 2}
var piece62 = {type:"Knight", location: 7}
var piece72 = {type:"Rook", location: 1}
var piece82 = {type:"Rook", location: 8}
var piece92 = {type:"Pawn", location: 9}
var piece102 = {type:"Pawn", location: 10}
var piece112 = {type:"Pawn", location: 11}
var piece122 = {type:"Pawn", location: 12}
var piece132 = {type:"Pawn", location: 13}
var piece142 = {type:"Pawn", location: 14}
var piece152 = {type:"Pawn", location: 15}
var piece162 = {type:"Pawn", location: 16}

  var player2 = []

    player2.push(piece12 = {type:"King", location: 4})
    player2.push(piece22 = {type:"Queen", location: 5})
    player2.push(piece32 = {type:"Bishop", location: 3})
    player2.push(piece42 = {type:"Bishop", location: 6})
    player2.push(piece52 = {type:"Knight", location: 2})
    player2.push(piece62 = {type:"Knight", location: 7})
    player2.push(piece72 = {type:"Rook", location: 1})
    player2.push(piece82 = {type:"Rook", location: 8})
    player2.push(piece92 = {type:"Pawn", location: 9})
    player2.push(piece102 = {type:"Pawn", location: 10})
    player2.push(piece112 = {type:"Pawn", location: 11})
    player2.push(piece122 = {type:"Pawn", location: 12})
    player2.push(piece132 = {type:"Pawn", location: 13})
    player2.push(piece142 = {type:"Pawn", location: 14})
    player2.push(piece152 = {type:"Pawn", location: 15})
    player2.push(piece162 = {type:"Pawn", location: 16})

console.log(player2[8].location)

var i = 0;

for(i = 0; i < player1.length; i++){
alert("Player 1 has a " + player1[i].type + " at position " + player1[i].location);
}

for(i = 0; i < player2.length; i++){
alert("Player 2 has a " + player2[i].type + " at position " + player2[i].location);
}

var pieces = player1.concat(player2)

for(i = 0; i < 5; i++){
  var x = Math.floor(Math.random()* (pieces.length - 1) + 1 )

console.log(x)

switch (x) {
  case 1:
    console.log("its a "+pieces[(x - 1)].type);
    break;
  case 17:
    console.log("its another "+pieces[(x - 1)].type);
    break;
  default:
    console.log("its not a King, its a "+pieces[(x - 1)].type);
}
}
