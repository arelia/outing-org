import React from 'react';

class AddIdeaForm extends React.Component {

  // add createIdea method here

  render() {
    return (
      <form className="add-idea-form">
        {/* Ref something? */}
        <label for="venue" className="form-field">Venue Name:
          <input type="text" name="venue" required />
        </label>
        <label for="street" className="form-field">Cross Streets:
          <input type="text" name="street" />
        </label>
        <label for="price" className="form-field">Price Point:
          <input name="price" type="number" />
        </label>
        <label for="attr_list" className="form-field"> Attributes:
          <input type="text" name="attr_list" />
          </label>
          <label for="image" className="form-field"> Image:
            <input type="url" name="image" />
          </label>

          <input type="submit" name="submit" value="Add It!" />
          <button disabled="disabled">Add #4</button>
          <button> Clear 1 item</button>
      </form>
    );
  }
}

export default AddIdeaForm;
