import React  from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar' ;
import BusinessList from './components/BusinessList/BusinessList';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NYC',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Seeking ${term} & ${location}, sorted by ${sortBy}...`);
  }
  render() { 
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
  )};
}

// export {business, businesses}
export default App;
