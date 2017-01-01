import React from 'react';

class Idea extends React.Component {
  render(){
    return(
      <li className="idea">
        <label>
          <input type='checkbox' />
          Venue Name
        </label>
        <p>Venue Cost</p>
        <img alt='alt tag' src='http://www.inetours.com/Chicago/images/rooftop/Roof-Wit_4101.jpg' />
        <ul>
          <li>Venue Amenities</li>
        </ul>
      </li>
    );
  }
}

export default Idea;
