$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var gender = $("input:radio[name=gender]:checked").val();
    var age = $("input:radio[name=age]:checked").val();
    var hair = $("input:radio[name=hair]:checked").val();

    console.log(gender);
    console.log(age);
    console.log(hair);

    if(gender === "male")
    {
      if(age === "young" && hair === "bald")
      {
        $(".pics").hide();
        $("#youngBaldMale").show();
      }
      else if(age === "old" && hair === "bald")
      {
        $(".pics").hide();
        $("#oldBaldMale").show();
      }
      else if(age === "young" && hair === "short")
      {
        $(".pics").hide();
        $("#youngShortMale").show();
      }
      else if(age === "old" && hair === "short")
      {
        $(".pics").hide();
        $("#oldShortMale").show();
      }
      else if(age === "young" && hair === "mullet")
      {
        $(".pics").hide();
        $("#youngMulletMale").show();
      }
      else if(age === "old" && hair === "mullet")
      {
        $(".pics").hide();
        $("#oldMulletMale").show();
      }
      else if(age === "young" && hair === "long")
      {
        $(".pics").hide();
        $("#youngLongMale").show();
      }
      else if(age === "old" && hair === "long")
      {
        $(".pics").hide();
        $("#oldLongMale").show();
      }
    }

    else if(gender === "female")
    {
      if(age === "young" && hair === "bald")
      {
        $(".pics").hide();
        $("#youngBaldFemale").show();
      }
      if(age === "old" && hair === "bald")
      {
        $(".pics").hide();
        $("#youngBaldFemale").show();
      }
      if(age === "young" && hair === "short")
      {
        $(".pics").hide();
        $("#youngBaldFemale").show();
      }
      if(age === "old" && hair === "short")
      {
        $(".pics").hide();
        $("#oldBaldFemale").show();
      }
      if(age === "young" && hair === "mullet")
      {
        $(".pics").hide();
        $("#youngMulletFemale").show();
      }
      if(age === "old" && hair === "mullet")
      {
        $(".pics").hide();
        $("#oldMulletFemale").show();
      }
      if(age === "young" && hair === "long")
      {
        $(".pics").hide();
        $("#youngLongFemale").show();
      }
      if(age === "old" && hair === "long")
      {
        $(".pics").hide();
        $("#oldLongFemale").show();
      }
    }

  });

});
