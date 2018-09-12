import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//ReactDOM.render(
//  <Game />,
//  document.getElementById('root2')
//);

//ReactDOM.render(<NavComponent />,  document.getElementById('navbar'));//document.querySelector('navbar'));