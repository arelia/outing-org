<places>

  <ul>
    <li class="item" each={ items.filter(whatShow) }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { venue } { price_point }
      </label>
      <img src="{ image }" alt="" />
      <p>
        <span class="street">{ cross_street }</span> <br>
        <ul class="attributes">
          <li each={ attribute, index in attributes }>{ attribute }</li>
        </ul>
      </p>
    </li>
  </ul>

  <form onsubmit={ add }>

    <label for="venue" class="form-field"> Venue Name:
      <input type="text" name="venue" required></label>

    <label for="street" class="form-field"> Cross Streets:
      <input type="text" name="street"></label>

    <label for="price" class="form-field"> Price Point:
      <input type="number" name="price"></label>

    <label for="attr_list" class="form-field"> Attributes:
      <input type="text" name="attr_list"></label>

    <label for="image" class="form-field"> Image:
      <input type="url" name="image"></label>

    <input type="submit" name="submit" value="Add It!">

    <button disabled={ !name }>Add #{ items.filter(whatShow).length + 1 }</button>

    <button disabled={ items.filter(onlyDone).length == 0 } onclick={ removeAllDone }>
    X{ items.filter(onlyDone).length } </button>
  </form>

  <!-- this script tag is optional -->
  <script>
    this.items = opts.items

    // edit(e) {
    //   this.venue = this.venue.value;
    //   this.street = this.street.value;
    //   this.price = this.price.value;
    //   this.attr_list = this.attr_list.value;
    //   this.image = this.image.value;
    // }

    add(e) {
      var venue = this.venue.value;
      var street = this.street.value;
      var price = this.price.value;
      var attr_list = this.attr_list.value;
      var image = this.image.value;

      console.log(venue, street, price, attr_list, image);
      console.log(this.items[0], this.items[1], this.items[2], this.items[3]);
    this.items.push({
          venue: venue,
          cross_streets: street,
          price_point: price,
          attributes: attr_list,
          image: image
        })
        // this.input.value = '';
        // this.input.value = '';
        // this.input.value = '';
        // this.input.value = '';
        // this.input.value = '';
      }

    removeAllDone(e) {
      this.items = this.items.filter(function(item) {
        return !item.done
      })
    }

    // an two example how to filter items on the list
    whatShow(item) {
      return !item.hidden
    }

    onlyDone(item) {
      return item.done
    }

    toggle(e) {
      var item = e.item
      item.done = !item.done
      return true
    }
  </script>

</places>
