$(function(){
  var nbToFind = Math.floor(Math.random() * 101);
  count=0;
  console.log(nbToFind);
  $('button').click(function(){
    nb = $('input').val();
    count ++;
   if (nb == nbToFind){
     alert ('Bravo vous avez trouvé en ' + count + ' fois !' );
   } else if (nb < nbToFind) {
      alert('Trop petit');
   }
   else {
     alert('Trop grand');
   }
   $('p').append(nb + ", "); // Permet d'afficher les nombres déjà testés à la suite
  });
});
