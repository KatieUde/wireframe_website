console.log('component has loaded');

window.onload = function() {
  console.log('all files that this page needs have been loaded');

//var example = new instance(...);
//example.initialize('div');

  // basic selectors
  // declare selector named container
  // access that container via document.getElementById('name-of' id)

//var firstList = document.getElementById('firstList');
//var beginners = document.getElementById('first_col')
//var warriorImage = document.createElement('img');

// var warriorImage = 'http://static1.squarespace.com/static/5008a3c6c4aa6450352d2303/t/5257aec4e4b066932a9abe58/1381478085579/warrior-2-other-side.jpg';

replaceImageOnClick.initialize('firstList','http://static1.squarespace.com/static/5008a3c6c4aa6450352d2303/t/5257aec4e4b066932a9abe58/1381478085579/warrior-2-other-side.jpg');
//replaceImageOnClick.render('');
  // firstList.addEventListener('click', function (){
    // var beginners = document.getElementById('first_col')
    // var warriorImage = document.createElement('img');
    // warriorImage.alt = 'A person in warrior pose';
    // console.log('warrior image');
    // warriorImage.src = 'http://static1.squarespace.com/static/5008a3c6c4aa6450352d2303/t/5257aec4e4b066932a9abe58/1381478085579/warrior-2-other-side.jpg'
    // first_col.appendChild()
    // beginners.appendChild(warriorImage);
    // console.log('my button is working')
  // })

// var visitor = {
//   name: null,
//   skillLevel: null;
//   domElement: null,
//   initialize: function() {
//     if (this.skillLevel == null){
//       this.skillLevel = prompt('Have you done yoga before?')
//     }
//     this.domElement = document.createElement('div');
//     elementToAppendTo.appendChild(this.domElement);
//     console.log('initialize complete')
//   }
// }
//

} // end of window.onload

// function example(tagToMakeClickable) {
// ​
//   this.tagToMakeClickable = tagToMakeClickable;
//   this.initialize = function() {
//     this.tagToMakeClickable.addEventListener('click', function() {
//       console.log('you\'re cute');
//     }
//   };
// }

var replaceImageOnClick = {
  domElement: null,
  firstList: null,
  initialize: function(selector, imageToRender) {
    // -----------------------------------------------------//
    // setting up button to click
    this.selector = document.getElementById(selector);
    this.selector.addEventListener('click', function (){
      replaceImageOnClick.render(imageToRender);
    });
    // -------------------------------------------------------//
    // initializing where to put image on click (when click actually happens)
    // create a dom element
    this.domElement = document.createElement('img');
    // attach it
    // first_col.appendChild(document.createElement('img'))
    var beginners = document.getElementById('first_col');
    beginners.appendChild(this.domElement);
  },
  render: function(imgToRender) {
    // update the dom element
    console.log(this.domElement);
    //first_col.innerHTML = url;
    this.domElement.src = imgToRender;
  }
};

  // var btn = document.getElementById('addPoint');
  // // var btn = document.querySelector('#addPoint');
  //
  // // initialize our UI component
  // user.initialize(status);
  // // selector.addEventListener(eventType,function());
  // btn.addEventListener('click', function() {
  //   user.updateScoreByOnePoint();
  // });

  // bind events to a DOM element
//   var body = document.getElementsByTagName('body')[0];
//   // we need to add a listener for events to an element
//   // mouse events
//   body.addEventListener('click', function() {
//     console.log(event);
//     console.log('ow, y u click me bro?');
//   });
//     // touch events
//   body.addEventListener('touchstart', function() {
//     // console.log(event);
//     // touchstart
//     // touchmoe
//     // touchend
//     console.log('yo yo dude y u pokin me? wtf man');
//   });
//
//   body.addEventListener('keyup', function(event) {
//     // look for specific keys to be pressed
//     if (event.keyCode == 13) {
//       console.log('y u press enter so much yo?')
//     }
//     console.log(event.keyCode);
//   });
//
// } //end window.onload
//
//
//   // create a user interface component
//   // the goal here is to create an Object that can update itself
//   // and visually show that if needed
//
//   // ex #1: user component
//   // internal state of component = special name for attributes
//   var user = {
//     name: null,
//     score: 0,
//     domElement: null,
//
//     // elementToAppendTo: document.selector for an individual element
//     initialize: function(elementToAppendTo) {
//       if (this.name == null) {
//         // get name
//         this.name = prompt('what is your name?');
//       }
//       this.domElement = document.createElement('div');
//       elementToAppendTo.appendChild(this.domElement);
//       console.log('initialize: complete')
//     },
//
//     // innerHTML: valid html to place in our domElement
//     render: function(innerHTML) {
//       if (typeof(innerHTML) == 'string') {
//         this.domElement.innerHTML = innerHTML;
//       }
//     },
//
//     buildPlayerStatusString: function() {
//       return this.name + ': ' + this.score;
//     }
//
//     getName: function() {
//       return this.name;
//     },
//     saveName: function(newName) {
//       if (typeof(newName) == 'string' && newName.length > 0) {
//         this.name = newName;
//         }
//         else {
//           alert ('You entered an incorrect or empty name');
//         }
//     },
//     getScore: function() {
//       return this.score
//     },
//     updateScoreByOnePoint: function() {
//       this.score = this.score + 1
//       var status = this.buildPlayerStatusString();
//       this.render(status);
//       return this.score
//     }
//   };
//
// var component = {
//   domElement: null,
//   initialize: function(selector) {
//     // create a dom element
//     this.domElement = document.createElement('div');
//     // attach it
//     selector.appendChild(this.domElement);
//   },
// render: function(statusText) {
//   // updated this dom element
//   this.domElement.innerHTML = statusText;
//   }
// };
