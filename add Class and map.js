
//create a component (write a function with a capitalized name, that returns JSX)

//GroceryList
//props = an object with a key "items", which has the value of the full array of all grocery items
var GroceryList = (props) => (
  <ul>
    {console.log('GroceryList props ', props)}
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)

//GroceryListItem processes a single item and turns it into a <li>
//props = an object where the key "item" refers to a single item, ex: 'Soy Milk
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('GroceryListItem props ', this.props)
    return (
      <li> {this.props.item}</li>
    )
  }
}

//"App" is the single component that is rendered to the DOM
var App = () => (
  <div>
    <h2> Annie's Shopping List</h2>
    <GroceryList items={['Soy Milk', 'Coke Zero', 'Psylium husk']} />
  </div>
);



//render App to the DOM
ReactDOM.render(<App />, document.getElementById('app'));



