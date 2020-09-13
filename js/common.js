$(document).ready(function () {
  // disable carousel cycling
  $(".carousel").carousel({ interval: false });
});

$(document).ready(function () {
  $("#Go_Top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 400);
    return false;
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $("#Go_Top").css("visibility", "visible");
  } else {
    $("#Go_Top").css("visibility", "hidden");
  }
});

$("#monitor").html($(window).width());

$(window).resize(function () {
  var viewportWidth = $(window).width();
  $("#monitor").html(viewportWidth);
});
jQuery(document).ready(function () {
  jQuery(".post").addClass("hid").viewportChecker({
    classToAdd: "open animated fadeIn",
    offset: 100,
  });
});
$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top - 75;
    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

// counter счетчик чисел
var currentNumber = $(".number").text();

$({ numberValue: currentNumber }).animate(
  { numberValue: 480 },
  {
    duration: 1000,
    easing: "linear",
    step: function () {
      $(".number").text(Math.ceil(this.numberValue));
    },
  }
);
// nuber1 to 150
var currentNumber = $(".number1").text();

$({ numberValue: currentNumber }).animate(
  { numberValue: 151 },
  {
    duration: 1000,
    easing: "linear",
    step: function () {
      $(".number1").text(Math.ceil(this.numberValue));
    },
  }
);
// nuber2 to 9000
var currentNumber = $(".number2").text();

$({ numberValue: currentNumber }).animate(
  { numberValue: 346 },
  {
    duration: 1000,
    easing: "linear",
    step: function () {
      $(".number2").text(Math.ceil(this.numberValue));
    },
  }
);

// diagram
function Donut_chart(options) {
  this.settings = $.extend(
    {
      element: options.element,
      percent: 100,
    },
    options
  );

  this.circle = this.settings.element.find("path");
  this.settings.stroke_width = parseInt(this.circle.css("stroke-width"));
  this.radius =
    (parseInt(this.settings.element.css("width")) / 1.5 -
      this.settings.stroke_width) /
    3;
  this.angle = -97.5; // Origin of the draw at the top of the circle
  this.i = Math.round(0.75 * this.settings.percent);
  this.first = true;

  this.animate = function () {
    this.timer = setInterval(this.loop.bind(this), 10);
  };

  this.loop = function (data) {
    this.angle += 5;
    this.angle %= 360;
    var radians = (this.angle / 180) * Math.PI;
    var x =
      this.radius +
      this.settings.stroke_width / 2 +
      Math.cos(radians) * this.radius;
    var y =
      this.radius +
      this.settings.stroke_width / 2 +
      Math.sin(radians) * this.radius;
    if (this.first == true) {
      var d = this.circle.attr("d") + " M " + x + " " + y;
      this.first = false;
    } else {
      var d = this.circle.attr("d") + " L " + x + " " + y;
    }
    this.circle.attr("d", d);
    this.i--;

    if (this.i <= 0) {
      clearInterval(this.timer);
    }
  };
}

$(function () {
  $(".donut-chart").each(function (index) {
    $(this).append(
      '<svg preserveAspectRatio="xMidYMid" xmlns:xlink="http://www.w3.org/1999/xlink" id="donutChartSVG' +
        index +
        '"><path d="M100,100" /></svg>'
    );
    var p = new Donut_chart({
      element: $("#donutChartSVG" + index),
      percent: $(this).attr("data-percent"),
    });
    p.animate();
  });
});

// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 12,
      nav: true,
      loop: false,
    },
  },
});
