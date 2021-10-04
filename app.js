// TODO




//create a component (write a function with a capitalized name, that returns JSX)



var GroceryList = () => (
  <div>
    <h2>Annie's Grocery List</h2>
    <GroceryListItem groceryItems={['Soy milk', 'Coke Zero', 'Psylium husk']} />
  </div>


);

var GroceryListItem = (props) => (
  <ul>
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>

  </ul>
)



//render component to the page


ReactDOM.render(<GroceryList />, document.getElementById('app'));



