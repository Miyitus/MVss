var avatar_orderly = true;
var avatar_size = '100px';

function load_protest(data){

var oNewP = document.createElement("div");

oNewP.innerHTML = "<div id=\"occupy-widget\" class=\"occupy-widget\" style=\"display: none;\">\n\n  <div id=\"occupy-joinprotest\">\n    <form id=\"occupy-joinprotest-form\" method=\"POST\" action=\"http://occupyinternet2.heroku.com/join_protest\">\n      <!-- <a href=\"http://fffff.at/enlist-today\" id=\"occupy-joinprotest-header\" target=\"_blank\">Occupy Internet</span> -->\n      <a href=\"http://fffff.at/occupy-the-internet\" target=\"_blank\" class=\"bigavatar\" id=\"occupy-joinprotest-button\">My heart still intact</a>\n    </form>\n  </div>\n\n  <div id=\"occupy-avatars\"><span id=\"occupy-protestor_avatars\"></span></div>\n</div>\n";

document.body.appendChild(oNewP);

//document.write("")

  var avatar_output = '';
  // Hardcode the response data

  if(data == undefined) data = {};

  data.protestors = [

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/1.gif"},
	
    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/1.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/2.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/3.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/40.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/4.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/5.gif"},
	
	{avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/61.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/23.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/6.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/7.gif"},
	
	{avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/20.png"},
	
	 {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/21.png"},	

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/8.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/9.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/10.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/11.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/5.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/13.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/17.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/16.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/28.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/27.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/18.gif"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/19.png"},

    

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/22.png"},

    {avatar: "http://tearusapart.miyovanstenis.com/petits/devices/img/26.png"},




  ]



  // Randomize dem avatars

  data.protestors.sort(function(){ return 0.5 - Math.random() });



  // Current user's id; not using this yet

  data.uuid = undefined;





  // Change 'start' to 'join' if people here already

  // if(data.protestors.length > 0){

  //   console.log("changing protest button text...");

  //   document.getElementById('occupy-joinprotest-button').innerHTML = 'Join The Protest!';

  // }



  // Add a selection of our avatars

  // FIXME don't want to load too many imgs, but what's the right #?

  var max_protestors = 10;

  for(var i = 0; i < max_protestors; i++){

    var protestor = data.protestors[i];

    protestor.uuid = i + 1; // ...



    var bottom = 0,

        left = (i*150),

        zindex = (100+Math.floor(Math.random()*20));

    avatar_output += '<div id="avatar'+i+'" class="bigavatar" style="position: absolute; bottom: '+bottom+'px; left: '+left+'px; z-index: '+zindex+'">';

    var owner = data.uuid != undefined && protestor.uuid == data.uuid;



    if(owner){

      document.getElementById('occupy-joinprotest').style.display = 'none';

      document.getElementById('occupy-avatars').style.left = '0px';



      avatar_output += '<div id="occupy-you">';

      avatar_output += 'This is you!';

      avatar_output += '<a id="customize_button" href="http://occupyinternet2.heroku.com/customize" onclick="toggle_customize();">';

      avatar_output += 'Customize Your Avatar';

      avatar_output += '<img src="http://occupyinternet2.heroku.com/images/arrow-down1.jpg" height="32" />';

      avatar_output += '</div>';

    }



    avatar_output += '<img src="'+protestor.avatar+'" />';



    if(owner){

      avatar_output += '</a>';

    }



    // if(protestor.tagline != '' && protestor.tagline != undefined){

    //  avatar_output += '<span class="tagline">'+protestor.tagline+'</span>';

    // }



    avatar_output += '</div>';

  }



  // Add and start animating

  document.getElementById('occupy-protestor_avatars').innerHTML = avatar_output;



  inject_sound();

  move_avatars();

  show_protest();

};



function inject_sound(){

  var audio = document.createElement('audio');

  audio.setAttribute('src', 'http://tearusapart.miyovanstenis.com/petits/devices/tinder.mp3');

  audio.setAttribute('loop', 'true');

  audio.volume = .2;

  audio.play();



  var widget = document.getElementById('occupy-widget')

  widget.appendChild(audio);

}





function show_protest(){

  var widget = document.getElementById('occupy-widget');

  widget.style.display = "block";



  // var avatars = document.getElementById('occupy-avatars');

  // avatars.style.bottom = "-200px";

  // slide_protest_in(avatars);

}



function slide_protest_in(el){

  setTimeout(function(){

    if(parseInt(el.style.bottom) >= -20){

      console.log("done animating protest");

    }

    else {

      el.style.bottom = (parseInt(el.style.bottom) + 12)+'px';

      slide_protest_in(el);

    }

  }, 10);

}





function move_avatars(counter){

  setTimeout(function(){

    if(counter == undefined){

      counter = 0;

    }

    var els = document.getElementsByClassName('bigavatar');

    for(var j = 0; j < els.length; j++){

      var el = els[j];

      var distance = (counter % 10 < 5) == 0 ? -2 : 2;

      if(counter % 15 == 0){

        var left = (counter + j) % 2 == 0 ? 4 : -4;

      }

      el.style.bottom = (parseInt(el.style.bottom) + distance) + 'px';

      el.style.left = (parseInt(el.style.left) + left) + 'px';

    }



    counter += 1;

    move_avatars(counter);

  }, 100);

}



function toggle_customize(){

  return true; // disabled



  var el = document.getElementById('occupy-customize');

  if(el.style.display == 'none'){

    el.style.display = 'block';

  }

  else {

    el.style.display = 'none';

  }

}



function join_protest(){

  document.getElementById('occupy-joinprotest-form').submit();

}



// window.onLoad = function(){

//   console.log("loading protest...");

//   load_protest();

// };



if(window.attachEvent) {

  window.attachEvent('onload', load_protest);

} else {

  if(window.onload) {

    var curronload = window.onload;

    var newonload = function() {

      load_protest;

    };

    window.onload = newonload;

  } else {

    window.onload = load_protest;

  }

}

