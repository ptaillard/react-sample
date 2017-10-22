import React, { Component } from 'react';
import './Boards.css';

class Board extends Component {
    render() {
      var className = "board";
      if (this.props.selected) {
        className += " selected";
      }
      return (
        <div className={className}>
          {this.props.index + 1}
        </div>
      );
    }
};

class BoardSwitcher extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        selectedBoard: 0,
        boards: [] 
      };
    }

    changeBoard = () => {
      this.setState({selectedBoard:(this.state.selectedBoard+1) % this.props.numBoards, boards: []});
    }
  
    render() {
      for (var index = 0; index < this.props.numBoards; index++) {
        var isSelected = index === this.state.selectedBoard;
        this.state.boards.push(
          <Board index={index} selected={isSelected} key={index} />
        )
      }
      return (
        <div>
          <div className="boards">{this.state.boards}</div>
          <button onClick={this.changeBoard}>Toggle</button>
          <div>Selected board: {this.state.selectedBoard}</div>
        </div>
      );
    }
};
  
export default BoardSwitcher;
