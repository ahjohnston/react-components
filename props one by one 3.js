
//create a component (write a function with a capitalized name, that returns JSX)


var App = () => (
  <div>
    <h2> Annie's Shopping List</h2>
    <GroceryList items={['Soy Milk', 'Coke Zero', 'Psylium husk']} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
)


//render component to the page
ReactDOM.render(<App />, document.getElementById('app'));



