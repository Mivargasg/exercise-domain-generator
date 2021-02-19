
let Aleatorio= () => {

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


let msg = pronoun[Math.floor(Math.random() * pronoun.length)]+adj[Math.floor(Math.random() * adj.length)]+noun[Math.floor(Math.random() * noun.length)] +".com";
   
return msg;
};

console.log(Aleatorio());



