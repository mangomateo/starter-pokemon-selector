// Pokemon Images
let pkmn1 = document.getElementById('bulbasaur');
let pkmn2 = document.getElementById('charmander');
let pkmn3 = document.getElementById('squirtle');

// Pokemon Descriptions
let pkmnDesc1 = document.getElementById('bulb-txt');
let pkmnDesc2 = document.getElementById('charm-txt');
let pkmnDesc3 = document.getElementById('squirt-txt');

// Buttons
let btn1 = document.getElementById('btn-bulb');
let btn2 = document.getElementById('btn-charm');
let btn3 = document.getElementById('btn-squirt');


// Color Change Effects
pkmn1.addEventListener('mouseover', function() {
  pkmn1.style.backgroundColor = '#3F3';
});
pkmn1.addEventListener('mouseleave', function() {
  pkmn1.style.backgroundColor = '#FFF';
});

pkmn2.addEventListener('mouseover', function() {
  pkmn2.style.backgroundColor = '#F60';
});
pkmn2.addEventListener('mouseleave', function() {
  pkmn2.style.backgroundColor = '#FFF';
});

pkmn3.addEventListener('mouseover', function() {
  pkmn3.style.backgroundColor = '#39F';
});
pkmn3.addEventListener('mouseleave', function() {
  pkmn3.style.backgroundColor = '#FFF';
});



// Selection confirmation
pkmn1.addEventListener('click', function() {
  confirm('You want to choose the grass Pokemon, Bulbasaur?');
});

pkmn2.addEventListener('click', function() {
  confirm('You want to choose the fire Pokemon, Charmander?');
});

pkmn3.addEventListener('click', function() {
  confirm('You want to choose the water Pokemon, Squirtle?');
});


// Button Functions
btn1.addEventListener('click', function() {
  if (pkmnDesc1.style.display = 'none') {
    pkmnDesc1.style.display = 'block';
  } else {
    pkmnDesc1.style.display = 'none';
  }
});
