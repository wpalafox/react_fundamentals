						//	Notes for React Fundamentals  \\	

/*
Composition
	
	Intro
		
		Take a piece of the application and wrap it up into its own isolated container 

		<Map />   <Slider />    <Date />  

		Think of the idea of separating your components, then composing your 
		components together.  



	Imperative vs Declarative
*/
		Imperative (How)
		
		1)
			var numbers = [1,2,4]
			var total = 0
			for (var i = 0; i < numbers.length; i++){
				total += numbers[i]
			}
		2)
			$( "#tylers-btn").click(function(){
				$(this).toggleClass( "highlight")
				$(this).text() === 'Add Highlight'
					? $(this).text('Remove Highlight')
					: $(this).text('Add Highlight')
			})








		
		Declarative (What)

		1)
			var numbers = [1,2,4]
			numbers.reduce(function(previous, current)
				return previous + current 
			})

		2)

			<TylersBtn
				onClick={this.handleToggleHighlight}
				highlight={this.state.highlight} />

			Instead of having the state live in the DOM we have it live in 
			a component somewhere 

			Is React Declarative ? 
			For the most part 

			this.setState)({
				highlight: !this.state.highlight 

			})

/*
		Benefits of Declarative Programming 
		-Reduces Side Effects 
		-Minmimize Mutability 
		-More readable code
		-Less Bugs
*/
/*
Unidirectional Dataflow

	Intro
		Main purpose of React- managing state inside of your application

Explicit Mutation
*/
	this.setState({
		highlight: !this.state.highlight,
	})


Just JavaScript


	<ul>
		{friends.map(function(name) {
			return (
				<li>
					{name}
				</li>



			)
		})}
	</ul


/*

React Router 


WebPack



Imperative Examples
*/

		arr = [1,2,3];



		function double (arr) {
		  let results = []
		  for (let i = 0; i < arr.length; i++){
		    results.push(arr[i] * 2)
		  }
		  return results
		}

		double(arr);

		(3) [2, 4, 6]


Declarative Examples

function double (arr) {
  return arr.map((item) => item * 2)
}


/*
Declarative programming is 
“the act of programming in languages that conform 
to the mental model of the developer rather than the 
operational model of the machine”.
*/ 



//WEBPACK

// 1) Make sure this file exports an object which is going to represent 

// In webpack.config.js
module.exports = {}


//2) Tell webpack where the entry point of our application is located

// In webpack.config.js
module.exports = {
  entry: './app/index.js',
}

/*
All we do is give our object  a property of entry and a calue which is a string 
which points to our root Javascript File in our app.

Now that we told webpack where to start, we need to tell it which transformations
to actually make. There is where the LOADERS will come through.  

Pretend we are writing in Coffeescript.  We will need a way to transform it into
Vanilla Javascript. Sounds like a perfect place for a CoffeScript your Loader. First,
we need to install the loader we want.  We'll use npm to do this. In terminal,
run npm install --save-dev coffe-loader which would then save coffe-loader as a
dev dependency in package.json file. Next, we need to configure our webpack.config.js
to be aware of this specific transform. To do that we'll first need to add a module
property to the object we're exporting in webpack.config.js. And then that module
property will ahve a property of RULES property which is an array
*/

// 3) 
// In webpack.config.js
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    rules: []
  },
}

/*
Inside of that rules is where we're going to put all of our different loaders or
transformations we want to happen. 

Each loader needs two things: The first, which file type to run the specific 
transformation on. For ex, we don't want to run CSS transformations on JS file
and vice versa. The second, the specifc loader we want to run. Look below.
*/

// In webpack.config.js
module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.coffee$/, use: "coffee-loader" }
    ]
  },
}

/*
First, notice, test:/\.coffee$/ section. It tells webpack to run the loader 
through every file that ends with '.coffee'; It's a regular expression.  
Don't know what defines a regular expression.  

USE tells webpack which transformation to run on all pathes that match
test RegEx 

As you can see, the steps for including more loaders is pretty basic. 
NPM install the specific loader then add a new object to the rules array.
*/

// 4)
// In webpack.config.js
module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.coffee$/, use: "coffee-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
}


/*
Again the code here is pretty self explanatory. filename is the name of the file 
that webpack is going to create which contains our new transformed code. path is 
the specific directory where the new filename (index_bundle.js) is going to be 
placed. If you've never seen __dirname before that's just referencing the name 
of the directory that the currently executing script resides in.

So now when webpack runs, our code will be transformed and then can be 
referenced at ourApp/dist/index_bundle.js. Well that's great, but now we need to 
come up with a plan to get our HTML to reference this specific file. There are a 
few options, but most are crappy. If we look at how normal apps are usually 
structured it's usually something like this.

----------------------------------------------------
/app
  - components
  - utils
  index.js
  index.html
/dist
  index.html
  index_bundle.js
package.json
webpack.config.js
.gitignore
------------------------------------------------------
*/
/*
So as you can see, our code we're developing with is found in the app folder 
and our transformed code is in the dist folder. Now you can visually see the 
issue. We want to change the index.html located in the app folder but the 
index.html file that the browser is actually going to be using is located in 
the dist folder (because that's where we've also told webpack to spit out the 
transformed JS file).

The first option to solve this is to just manage two index.html files 
and whenever you change the one located in /app, copy/paste that to the one 
located in /dist. Though this will work, I won't be able to look my Wife in the 
eyes again if we do this.
*/
