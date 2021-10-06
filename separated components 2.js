
//create a component (write a function with a capitalized name, that returns JSX)


//this is the "app" component
var GroceryList = () => (
  <div>
    <h2> Annie's Shopping List</h2>
    <SoyMilk />
    <CokeZero />
    <Psylium />
  </div>
);

var SoyMilk = () => (
  <li>Soy milk</li>

)

var CokeZero = () => (
  <li>Coke Zero</li>
)
var Psylium = () => (
  <li>Psylium husk</li>
)


//render component to the page
ReactDOM.render(<GroceryList />, document.getElementById('app'));



