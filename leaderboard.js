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
        return PlayersList.find();
    },
    'count': function(){
        return PlayersList.find().count();
    }
  });
  // We can create events in Meteor that we're able to trigger the execution of.
  // Example:
  // Template.leaderboard.events();
  // Just like helpers, events have to be tied to templates.  We format our events
  // similarly to helpers.  The 'click' is the event type.
  Template.leaderboard.events({
    //'click': function() {
    //    console.log("You clicked something");
    // }
    // While randomly clicking things are fun, we want it to trigger when something specific
    // is clicked (such as an 'li' element or a button, and we want it to be useful.)
    // To do this, we'll use event selectors.  We'll also attach the player class to the
    // li element to specify on what specifically we want our event to be triggered.
    'click li.player': function () {
      console.log("You clicked a list item");
    }
  })}
