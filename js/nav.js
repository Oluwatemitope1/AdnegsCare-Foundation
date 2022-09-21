  // storing variables
  const hamburger= document.querySelector(".chinedu-hamburger");
  const navMenu= document.querySelector(".chinedu-nav-menu");

//    hamburger toggling function
hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})
// activating the nav menu with the hamburger
document.querySelectorAll(".chinedu-nav-link").forEach(n => n.addEventListener("click", () => {
hamburger.classList.remove("active")
navMenu.classList.remove("active")
}))


// Highliting active current page on navigation menu

document.addEventListener('DOMContentLoaded', function() {
    const selector = '.chinedu-nav-link';
    const elems = Array.from( document.querySelectorAll( selector ) );
    const navigation = document.querySelector( 'nav' );
    
    function makeActive( evt ) {
      const target = evt.target;
      
      if ( !target || !target.matches( selector ) ) {
        return;
      }
      
      elems.forEach( elem => elem.classList.remove( 'active' ) );
        
        evt.target.classList.add( 'active' );
    };
    
    navigation.addEventListener( 'mousedown', makeActive );
    
    } );