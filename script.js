var ctx = document.getElementById("myRadar");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["News/General", "Horror", "Drama", "Misc", "Documentary", "Kids", "Music", "Sports", "Game Show"],
    datasets: [{
      label: 'Customer: Davor Dindžar',
      backgroundColor: "rgba(153,255,51,0.4)",
      borderColor: "rgba(153,255,51,1)",
      data: [128, 3, 29, 9, 56, 13, 13, 5, 38, 15]
    }]
  }
});