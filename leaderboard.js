// We don't use the 'var' keyword below, because we want to create
// a global variable.
PlayersList = new Mongo.Collection('players');

// The code below display itself in BOTH the command line (server) AND
// the client (look in the DevTools console) because it is running on both.
console.log("Hello World from Meteor!");

// Now if we add a conditional:
if(Meteor.isClient){
  // This code only runs on the client! (you'll see it in the DevTools console only!)
  // console.log("Hello Client!");
}

// Now if we add another conditional:
if(Meteor.isServer){
  // This code only runs on the server! (you'll see it in the command line only!)
  // console.log("Hello Server!");
}
