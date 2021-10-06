
//create a component (write a function with a capitalized name, that returns JSX)

var GroceryList = () => (
<ul>
  <li>Soy milk</li>
  <li>Coke Zero</li>
  <li>Psylium husk</li>
</ul>
);



//render component to the page
ReactDOM.render(<GroceryList />, document.getElementById('app'));



