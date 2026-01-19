import './style.css'

// Interactive logic can go here
console.log('Parivahan UI Clone Loaded');

// Example: Simple Marquee Pause on Hover (if marquee is used)
const marquee = document.querySelector('.news-marquee');
if (marquee) {
  marquee.addEventListener('mouseenter', () => marquee.stop());
  marquee.addEventListener('mouseleave', () => marquee.start());
}
