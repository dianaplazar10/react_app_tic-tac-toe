import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//class Square extends React.Component {
////   constructor(props) {
////       super(props);
////       this.state = {
////         value: null,
////       };
////   }
//
//  render() {
//    return (
//     <button className="square" onClick={() => this.props.onClick()} >
////     onClick={() => this.setState({value:'X'})} >
////        {this.state.value}
//        {props.value}
//      </button>
//    );
//  }
//}

//Replacing the above Square Component/Class with below function
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {
   constructor(props) {
           super(props);
           this.state = { squares: Array(9).fill(null),
                          xIsNext: true,
                        };
   }

   handleClick(i) {
       const squares = this.state.squares.slice();
       if (calculateWinner(squares) || squares[i]) {//this loop stops further clicks if already a winner
             return;
           }
       squares[i] = this.state.xIsNext ? 'X' : 'O';
       this.setState({
         squares: squares,
         xIsNext: !this.state.xIsNext,
       });
   }

  renderSquare(i) {
    //return <Square />;//Update this line to dynamically insert data in Square component.
    //return<Square value={i} />;//In order to make this work.. you will have to update Square component's render() return.
    return(<Square value={this.state.squares[i]} onClick= { () => this.handleClick(i)} /> );
  }

  render() {
//    const status = 'Next player: X';
//    const status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');

  const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//class ShoppingList extends React.Component {
//  render() {
//    return (
//      <div className="shopping-list">
//        <h1>Shopping List for {this.props.name}</h1>
//        <ul>
//          <li>Instagram</li>
//          <li>WhatsApp</li>
//          <li>Oculus</li>
//        </ul>
//      </div>
//    );
//  }
//}

//const NavComponent = React.createClass({
	class NavComponent extends React.Component {
	render() {//}: function() {
		return (
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="#" onClick={this.burgerToggle}>Link 1</a>
						<a href="#" onClick={this.burgerToggle}>Link 2</a>
						<a href="#" onClick={this.burgerToggle}>Link 3</a>
					</div>
				</div>
			</nav>
		);
		}}
//	},
//	burgerToggle: function() {
//		let linksEl = document.querySelector('.narrowLinks');
//		if (linksEl.style.display === 'block') {
//			linksEl.style.display = 'none';
//		} else {
//			linksEl.style.display = 'block';
//		}
//	}
//}//);

// ========================================

ReactDOM.render(<Game />,document.getElementById('root'));

//ReactDOM.render(<NavComponent />,  document.getElementById('navbar'));//document.querySelector('navbar'));