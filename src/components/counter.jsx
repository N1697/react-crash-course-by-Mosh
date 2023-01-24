import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  // state = {
  //   value: this.props.counter.value,
  //   // tags: ["tag1", "tag2", "tag3", "tag4"],
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // Event Hanlding:
  // 1. Using constructor() to bind the method to the instance of the component
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log("Increment Clicked!", this);
  // }

  // 2. Using arrow function to bind the method to the instance of the component
  // handleIncrement = (product) => {
  //   console.log(product);
  //   //console.log("Increment Clicked!", this);
  //   this.setState({ value: this.state.value + 1 });
  //   //The argument in setState() is an object, the props of this object
  //   //will be merged with what we have in the state object or it will
  //   //override those props if they already exist
  // };

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //onClick={(product) => this.handleIncrement(product)}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
