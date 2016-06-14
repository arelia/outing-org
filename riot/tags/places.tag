<places>

  <ul class="item-wrapper">
    <li class="item" each={ items.filter(whatShow) }>
      <div class="thumb">
        <img src="{ image }" alt="" />
      </div>
      <div class="info">
        <label class={ completed: done }>
            <input type="checkbox" checked={ done } onclick={ parent.toggle }> { venue }
        </label>
        <ul class="attributes">
            <li each={ attribute, index in attributes }>{ attribute }</li>
        </ul>
      </div>
    </li>
  </ul>

  <form onsubmit={ add }>

    <label for="venue" class="form-field"> Venue Name:
      <input type="text" name="venue" required></label>

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
      // var street = this.street.value;
      // var price = this.price.value;
      var attr_list = this.attr_list.value.split(',');
      var image = this.image.value;

      console.log(venue, attr_list, image);
      console.log(this.items[0], this.items[1], this.items[2], this.items[3]);
    this.items.push({
          venue: venue,
          attributes: attr_list,
          image: image
        })
        this.venue.value = '';
        this.attr_list.value = '';
        this.image.value = '';
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
