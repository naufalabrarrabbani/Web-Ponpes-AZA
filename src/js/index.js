let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").classList.add("show");
   } else {
      document.getElementById("navbar").classList.remove("show");
   }
   prevScrollpos = currentScrollPos;
};

let text = new SplitType ('#hero-title');
let characters = document.querySelectorAll('.char');

for (i=0; i<characters.length; i++) {
   characters[i].classList.add('translate-y-full');
}

gsap.to ('.char', {
   y: 0,
   stagger : 0.05,
   delay : 0.02,
   duration : 0.5
});
