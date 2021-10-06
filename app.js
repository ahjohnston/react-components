
//create a component (write a function with a capitalized name, that returns JSX)

//(this is called TodoList in the example)
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      selected: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  onMouseEnter() {
    console.log('mouse on!')
    this.setState({
      selected: !this.state.selected
    })
  }

  onMouseLeave() {
    console.log('mouse off!')
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.selected ? 'bold' : 'normal'
    }
    return (
      <li
        style={style}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >

        {this.props.item}
      </li>
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



