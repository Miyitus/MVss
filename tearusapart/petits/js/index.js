$('a[href*=#]').click(function(){return false;});

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
	wrap: $('#people'),
	people: [ 
		{name: 'Alexandre', age: 26, img: "img/alex.jpg"},
		{name: 'Cyprien', age: 24, img: "img/cyprien.jpg"},
		{name: 'Boualem', age: 29, img: "img/boualem.jpg"},
		{name: 'Julien', age: 32, img: "img/julien.jpg"},
		{name: 'Charlie', age: 27, img: "img/charly.jpg"},
		{name: 'Alexandre', age: 27, img: "img/nicolas.jpg"},
		{name: 'Adrien', age: 28, img: "img/adrien.jpg"},
		{name: 'Miguel', age: 31, img: "img/miguel.jpg"},
		{name: 'Cyrille', age: 28, img: "img/cyrille.jpg"}
	],
	add: function(){
		var random = this.people[Math.floor(Math.random() * this.people.length)];
		this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong>, " + random.age + "</span></div>");
	}
};

var App = {
	yesButton: $('.button.yes .trigger'),
	noButton: $('.button.no .trigger'),
	blocked: false,
	like: function(liked){
		var animate = liked ? 'animateYes' : 'animateNo';
		var self = this;
		if(!this.blocked){
		  this.blocked = true;
		  	$('.person').eq(0).addClass(animate).one(animationEndEvent, function(){
	   			$(this).remove();
				Person.add();
				self.blocked = false;
			});
		}
	}
};

var Phone = {
	wrap: $('#phone'),
	clock: $('.clock'),
	updateClock: function(){
		var date = new Date();
		var hours = date.getHours();
		var min = date.getMinutes();
     hours = (hours < 10 ? "0" : "") + hours;
		min = (min < 10 ? "0" : "") + min;
		var str = hours + ":" + min;
		this.clock.text(str);
	}
}
  
App.yesButton.on('mousedown', function(){
	App.like(true);
});

App.noButton.on('mousedown', function(){
	App.like(false);
});

$(document).ready(function(){
  Phone.updateClock(); 
  setInterval('Phone.updateClock()', 1000);
  Person.add();
  Person.add();
  Person.add();
  Person.add();
});