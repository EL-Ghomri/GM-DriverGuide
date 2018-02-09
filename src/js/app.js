function add_return() {

	  var button ='<a href="index.html"><img src="./images/return.png" height="30px" width="30px" style="margin-right:auto; display:block;"/></a>';
      $('#main').append(button);



}



var ctx1 = document.getElementById("donut");
var myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ],
      data: [30, 70]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI
  }
});


var ctx2 = document.getElementById("donut2");
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [40, 60],
        backgroundColor: [
        "#2ecc71",
        "#e74c3c"
        ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI
  }
});

var ctx3 = document.getElementById("donut3");
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c"
      ],
        borderColor: [
          "#C0C0C0",
          "#C0C0C0"
        ],
      data: [30, 70]
    }]
  },
  options: {
    cutoutPercentage: 80,
    rotation: 1*Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
    circumference: 1*Math.PI 
  }
});

var myDoughnutChart = new Chart(ctx).Doughnut(data,option);
var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

$(function () {
    $('.min-chart#chart-sales').easyPieChart({
        barColor: "#4caf50",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});




function showSpeed(data) {
  console.log(data);
  var speed = data.average_speed;
  if (speed !== undefined) {
    var speedText = document.getElementById('speed');
    speedText.innerHTML = speed;
  }
};

gm.info.watchVehicleData(showSpeed, ['average_speed']);
gm.info.getVehicleData(showSpeed, ['average_speed']); 

function processData(data) {
  console.log(data);
  var brakeFluidIndicator = data.brake_fluid_ind;
  if (brakeFluidIndicator !== undefined) {
    var brakeFluidIndicatorValue = document.getElementById('brakeFluid');
    brakeFluidIndicator.value = brakeFluidIndicatorValue;
  }
};


function myFunction() {

 var iframes = document.querySelectorAll('iframe');
for (var i = 0; i < iframes.length; i++) {
    iframes[i].parentNode.removeChild(iframes[i]);
}
	var origin = document.getElementById("origin").value;
	var dest = document.getElementById("dest").value;
	
    var x = document.createElement("IFRAME");
    x.setAttribute("src", "https://www.google.com/maps/embed/v1/directions?key=AIzaSyAX-Y8x_HT4fyF3dK93aBRMGdeYSB9OTGI&origin="+origin+"&destination="+dest+"&avoid=tolls|highways");
	x.style.width = "100%";
    x.style.height = "480px";
	
	
    document.body.appendChild(x);
	
}


gm.info.getVehicleData(processData, ['brake_fluid_ind']);

