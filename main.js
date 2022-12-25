  setInterval(function() {
    location.reload();
  }, 9000);
  

  var textWrapper2 = document.querySelector('.ml16dotcom');
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml16dotcom .letter',
      translateY: [-100,0],
      easing: "easeOutExpo",
      duration: 10000,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml16dotcom',
      opacity: 0,
      duration: 5000,
      easing: "easeOutExpo",
      delay: 10000000
    });
