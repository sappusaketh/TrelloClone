import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    backlog: {
      color: "red",
      heading: "Backlog",
      items: []
    },
    toDo: {
      color: "yellow",
      heading: "To Do",
      items: []
    },
    inProgrss: {
      color: "green",
      heading: "In Progress",
      items: []
    },
    completed: {
      color: "blue",
      heading: "Completed",
      items: []
    }
  }


  constructor(props) {
    super(props)
    this.newCategory = React.createRef();
  }

  categoies = Object.keys(this.state)

  addItem(category) {
    let found = false
    var itemDetails = prompt("Please enter Item details", "");
    if (itemDetails && itemDetails.length > 0) {
      this.categoies.forEach(element => {
        let items = this.state[element].items;
        if (items.includes(itemDetails)) {
          alert("Item Exists")
          if (!found) {
            found = true
          }
        }
      });
      if (!found) {
        this.state[category].items.push(itemDetails);
        this.setState({
          [category]: this.state[category]
        })
      }
    }
    console.log(this.state);
  }

  addCategory() {
    let val = this.newCategory.current.value;
    let obj = {
      color: "grey",
      heading: val,
      items: []
    }
    // this.stseate[val] = obj
    this.categoies.push(val)

    this.setState({
      [val]: obj
    })

    this.newCategory.current.value = ""

  }

  moveItem(index, category, side) {
    let destination;
    let item = this.state[category].items.splice(index, 1)
    let originIndex = this.categoies.indexOf(category)
    if (side === "right") {
      destination = this.categoies[originIndex + 1]
    } else if (side === "left") {
      destination = this.categoies[originIndex - 1]
    }
     this.state[destination].items.push(item[0])
    this.setState({
      [category]: this.state[category],
      [destination]: this.state[destination]
    })
    console.log(this.state);
  }

  getLeftBtn(categoryIndex, length, i, category) {
    if (categoryIndex !== 0) {
      return [<div key={i} className="leftBtn">
        <button onClick={() => this.moveItem(i, category, "left")} className="btn"> 	&lt;  </button>
      </div>]
    } else {
      return ""
    }
  }

  getRightBtn(categoryIndex, length, i, category) {
    if (categoryIndex !== length) {
      return [<div key={i} className="rightBtn">
        <button onClick={() => this.moveItem(i, category, "right")} className="btn">	&gt;</button>
      </div>]
    } else {
      return ""
    }
  }

  buildItems = (data, category) => {
    let items = [];
    let categoryIndex = this.categoies.indexOf(category);
    let length = this.categoies.length - 1
    for (let i = 0; i < data.length; i++) {
      items.push(
        <div key={i}className="item">
          <div className="leftBtn">
            {this.getLeftBtn(categoryIndex, length, i, category)}
          </div>
          <div className="item-content">
            {data[i]}
          </div>
          {this.getRightBtn(categoryIndex, length, i, category)}
        </div>
      )
    }
    return items
  }


  segments = () => {
    let columns = []
    for (let elm in this.state) {
      columns.push(
        <div key={elm} className="column" style={{ background: this.state[elm].color }}>
          <h2 className="textCenter">{this.state[elm].heading}</h2>
          <div className="textCenter">
            <button onClick={() => this.addItem(elm)}>+ Add Item</button>
          </div>
          <div className="content">
            {this.buildItems(this.state[elm].items, elm)}
          </div>
        </div>
      )
    }
    console.log(columns);
    return columns
  }

  render() {
    return (

      <div className="wrapper">
        <div className="headSection">
          <div className="addSection">
            <label>Add Category</label>
            <input type="text" ref={this.newCategory} placeholder="name"></input>
            <button onClick={() => this.addCategory()}>Add</button>
          </div>

        </div>
        <div className="main-content">

          {this.segments()}
        </div>
      </div>
    );
  }
}

export default App;
