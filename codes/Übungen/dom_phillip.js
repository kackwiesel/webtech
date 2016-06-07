function treeview (obj, count) {
  var treecorner = '└─'
  // create new div in DOM to hold the tree
  var treediv = document.createElement('DIV')
  // set new div's id so we can find it easier and work with it
  treediv.id = 'treeholder'
  // appen newly created tree-holding div to body
  if (document.getElementById('treeholder') == null) { document.body.appendChild(treediv) }
  // fetch newly created and appended tree-holding div to work with it
  var treeholder = document.getElementById(treediv.id)
  // set padding for treeholder
  treeholder.style.padding = '10px'
  // assign onclick-event to hide the treeholder when clicked
  treeholder.setAttribute('onClick', 'document.getElementById("treeholder").style.display = "none"')
  if (treeholder.style.display === 'none') {
    treeholder.style.display = 'block'
  }
  // create function to repeat a string given times
  function repeat (str, times) {
    return new Array(times + 1).join(str)
  }
  // fetch childNodes of currently selected DOM-object
  var c = obj.childNodes
  // check if current object has childNodes
  if (c.length > 0) {
    // on initial call, we print "BODY", which should not have any treecorners or something similiar before
    if (count === 0) {
      treeholder.innerHTML = "<h2>DOM-Tree</h2><p>DOM-Elements of this Element holding the tree are ignored</br>Hover over any Eelement to see it's ID if one is assigned<br/><strong>Click to close</strong><br/><br/></p>"
      treeholder.innerHTML = treeholder.innerHTML + '<p>' + repeat('&nbsp;&nbsp;&nbsp;&nbsp;', count) + obj.tagName + '</p>'
    // omit the treeholder and its children in the treeview
    } else if (obj.id === 'treeholder' || obj.parentNode.id === 'treeholder') {
      treeholder.innerHTML = treeholder.innerHTML
    // for everything else put in front fugly spaces for intendation and set title-attribute to objects id for showing objects id in tooltip on hover
    } else {
      treeholder.innerHTML = treeholder.innerHTML + "<p title='" + obj.id + "' class='level" + count + "'>" + repeat('&nbsp;&nbsp;&nbsp;&nbsp;', count) + treecorner + obj.tagName + '</p>'
    }
    // iterate through all childNodes of current object and recursively do the same procedure
    for (var i = 0, max = c.length; i < max; i++) {
      treeview(c[i], count + 1)
    };
  };
}
