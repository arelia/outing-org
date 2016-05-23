riot.tag2('places', '<ul> <li each="{items.filter(whatShow)}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {venue} {price_point} </label> <img riot-src="{image}" alt=""> <p> <span class="street">{cross_street}</span> <br> <ul> <li each="{attribute, index in attributes}">{attribute}</li> </ul> </p> </li> </ul> <form onsubmit="{add}"> <label for="venue"> Venue Name: <input type="text" name="venue" required></label> <label for="name"> Cross Streets: <input type="text" name="street"></label> <label for="name"> Price Point: <input name="price" type="number"></label> <label for="name"> Attributes: <input type="text" name="attr_list"></label> <label for="name"> Image: <input type="url" name="image"></label> <input type="submit" name="submit" value="Add It!"> <button __disabled="{!name}">Add #{items.filter(whatShow).length + 1}</button> <button __disabled="{items.filter(onlyDone).length == 0}" onclick="{removeAllDone}"> X{items.filter(onlyDone).length} </button> </form>', '', '', function(opts) {
    this.items = opts.items

    this.add = function(e) {
      this.venue = this.venue.value;
      this.street = this.street.value;
      this.price = this.price.value;
      this.attr_list = this.attr_list.value;
      this.image = this.image.value;

    this.items.push({
          venue: this.venue,
          cross_streets: this.street,
          price_point: this.price,
          attributes: this.attr_list,
          image: this.image
        })
        this.venue = this.input.value = '';
        this.street = this.input.value = '';
        this.price = this.input.value = '';
        this.attr_list = this.input.value = '';
        this.image = this.input.value = '';
      }.bind(this)

    this.removeAllDone = function(e) {
      this.items = this.items.filter(function(item) {
        return !item.done
      })
    }.bind(this)

    this.whatShow = function(item) {
      return !item.hidden
    }.bind(this)

    this.onlyDone = function(item) {
      return item.done
    }.bind(this)

    this.toggle = function(e) {
      var item = e.item
      item.done = !item.done
      return true
    }.bind(this)
});
