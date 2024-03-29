import React from 'react';
// import ReactDOM from 'react-dom'
import './BusinessList.css';
import Business from '../Business/Business';
// import {business} from '../../App'

class BusinessList extends React.Component {
    render() {
        return (
        <div className="BusinessList">
           {this.props.businesses.map(business => {
               return <Business business={business} />;
           })
           }
        </div>
)

    }
}

export default BusinessList;