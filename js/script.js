$(function() {
	$('.toggle').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('.overlay').toggleClass('visible');
	});
});

var typed = new Typed(".typing", {
  strings: ["Frontend Developer"],
  typespeed: 4000,
  backspeed: 3000,
  loop: true,
})


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
