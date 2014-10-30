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
  //=====================================================================
  // The below is deprecated, but it gives us a good example of how helpers work.
  // 1 - The Template keyword searches through the templates in our Meteor application
  // 2 - The leaderboard keyword is a reference to the name of the template we created
  // earlier.  Every helper function we create needs to be attached to an individual template.
  // 3 - The player keyword is a name we're giving to this function.  You can choose whatever
  // name you like but do know that we'll soon reference it from inside the HTML file.
  // Template.leaderboard.player = function(){
  //  return "some text from the helper function"
  //   }
  //=================================================================
  // Instead, we create a block.  We use the JSON format in between the curly brackets.
  Template.leaderboard.helpers({
    'player': function(){
        return "Some text from the player helper function"
    },
    'otherHelperFunction': function(){
      return "Some text from some other help function"
    }
  });
}

// Now if we add another conditional:
if(Meteor.isServer){
  // This code only runs on the server! (you'll see it in the command line only!)
  // console.log("Hello Server!");
}
