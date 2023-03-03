import React from 'react'
import "./scrollUp.css"
import "../../App.css"

function ScrollUp() {

  window.addEventListener("scroll", function() {
    const scrollUp = this.document.querySelector(".scrollUp")
    if(this.scrollY >= 560) scrollUp.classList.remove("show-scroll");
    else scrollUp.classList.add("show-scroll")
  })

  return (
    <a 
      href="#top"
      className="scrollUp"
    >
      <i className="uil uil-arrow-up scrollUp__icon"></i>
    </a>
  )
}

export { ScrollUp }
