import React from 'react';
import Wallet from "./Wallet";
import Loot from "./Loot";

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Loot Checker</h2>
				<hr/>
				<Wallet/>
				<hr />
				<Loot />
				<div>
					Powered by <a target="_blank" rel="noopener noreferrer"  href="https://www.coindesk.com/price">Coindesk</a>
				</div>
			</div>
		)
	}
}

App.displayName = 'App'

export default App;
