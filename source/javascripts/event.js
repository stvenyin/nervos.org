// This is where it all goes :)

document.addEventListener('DOMContentLoaded', function() {
  var eventsContainer = document.querySelector('#events .events-container')
  var toggle = document.querySelector('#events .events-toggle-img')
  var eventlist = document.querySelectorAll('#events .event-container.not-active')
  var keyevent = eventlist[2]
  var bottom1 = eventsContainer.getBoundingClientRect().bottom
  var bottom2 = keyevent.getBoundingClientRect().bottom
  var hComplete = eventsContainer.getBoundingClientRect().height
  var hShrink = hComplete - (bottom1 - bottom2)

  eventsContainer.style.height = hShrink.toString() + 'px'

  toggle.addEventListener('click', function() {
    var eventsContainer = document.querySelector('#events .events-container')
    var h = eventsContainer.getBoundingClientRect().height
    if (h == hComplete) {
      eventsContainer.style.height = hShrink.toString() + 'px'
      toggle.style.transform = 'translate(-50%) rotate(0deg)'
    } else {
      eventsContainer.style.height = hComplete.toString() + 'px'
      toggle.style.transform = 'translate(-50%) rotate(180deg)'
    }
  })
})
