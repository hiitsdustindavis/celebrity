$(document).ready(function() {
  $(".container form").submit(function(event) {
    genderpref = $("input[name=genderpref]:checked").val();
    personality = $("select#option1").val();


    if (genderpref === 'female' && personality === 'Cute and Funny'){
      $("#silverman").show();
      $("#obrien, #glass, #coulter, #rodman, #harding").hide();
    }

    if (genderpref === 'male' && personality === 'Cute and Funny') {
      $("#obrien").show();
      $("#silverman, #glass, #coulter, #rodman, #harding").hide();
    }

    if (genderpref === 'male' && personality === 'Polarizing and Political'){
      $("#glass").show();
      $("#silverman, #obrien, #coulter, #rodman, #harding").hide();
    }

    if (genderpref === 'female' && personality === 'Polarizing and Political') {
      $("#coulter").show();
      $("#silverman, #glass, #obrien, #rodman, #harding").hide();
    }

    if (genderpref === 'male' && personality === 'Insane and Athletic'){
      $("#rodman").show();
      $("#silverman, #glass, #coulter, #obrien, #harding").hide();
    }

    if (genderpref === 'female' && personality === 'Insane and Athletic') {
      $("#harding").show();
      $("#silverman, #glass, #coulter, #rodman, #obrien").hide();
    }


  event.preventDefault();
  });
});
