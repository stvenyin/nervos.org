// This is where it all goes :)

document.addEventListener("DOMContentLoaded", function() {
  var btns = document.getElementsByClassName('n-dropdown-toggle');
  var className = "n-open";

  for(var i = 0; i < btns.length; i++) {


    (function(index) {
      var currentBtn = btns[index];
      var currentList = currentBtn.parentElement.getElementsByClassName('n-dropdown-list')[0];
      var classList = currentList.classList;
      currentBtn.addEventListener("click", function() {
        if(classList.contains(className)) {
          // remove
          classList.remove(className);
        } else {
          // add
          classList.add(className);
        }
      })
    })(i);
  }
});
