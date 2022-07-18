function responsiveNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


function hideOthers(actual) {
  var contentDivs = document.querySelectorAll('.content');
  contentDivs.forEach(others => {
    if (others !== actual) {
      others.style.display = 'none';
    }
  });
}

function toggleDisplay(div) {
  if (div.style.display === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

function onContentLoaded() {
  var collapsibleDivs = document.querySelectorAll(".collapsible");

  collapsibleDivs.forEach(div => {
    div.addEventListener('click', e => {
      var clicked = e.target;
      var sibling = clicked.nextElementSibling;

      toggleDisplay(sibling);
      hideOthers(sibling);
    })
  })
}

document.addEventListener("DOMContentLoaded", onContentLoaded);