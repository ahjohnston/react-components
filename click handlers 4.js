
//create a component (write a function with a capitalized name, that returns JSX)

//(this is called TodoList in the example)
var GroceryList = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  }
  return (
    <ul>
      <li onClick={onListItemClick} >{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  )
}


var App = () => (
  <div>
    <h2> Annie's Shopping List</h2>
    <GroceryList items={['Soy Milk', 'Coke Zero', 'Psylium husk']} />
  </div>
);



//render component to the page
ReactDOM.render(<App />, document.getElementById('app'));



