import React from 'react';

class Idea extends React.Component {
  render(){
    const {details} = this.props;
    return(
      <li className="idea">
        <label>
          <input type='checkbox' />
          {details.venue}
        </label>
        <p>{details.street}</p>
        <p>{details.price}</p>
        <img alt='alt tag' src={details.image} />
        <ul>
          <li>{details.attr_list}</li>
        </ul>
      </li>
    );
  }
}

export default Idea;
