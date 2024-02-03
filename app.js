let powerForm = document.getElementById("powerForm");
powerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var current = document.getElementById("currentPower").value;
    var voltage = document.getElementById("voltagePower").value;
    var result  = current * voltage;
    if(current != "" && voltage != ""){
        document.getElementById("powerResult").innerHTML = "กำลังไฟฟ้า (P) เท่ากับ " + result + " Watt";
    }
  });

  let currentForm = document.getElementById("currentForm");
  currentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      var power  = document.getElementById("powerCurrent").value;
      var voltage = document.getElementById("voltageCurrent").value;
      var result  = power/voltage;
      if(power != "" && voltage != ""){
          document.getElementById("currentResult").innerHTML = "กระแสไฟฟ้า (I) เท่ากับ " + result.toFixed(2) + " Amp";
      }
    });

    let voltageForm = document.getElementById("voltageForm");
    voltageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        var power  = document.getElementById("powerVoltage").value;
        var current = document.getElementById("currentVoltage").value;
        var result  = power/current;
        if(power != "" && current != ""){
            document.getElementById("voltagResult").innerHTML = "แรงดันไฟฟ้า (V) เท่ากับ " + result.toFixed(2) + " Volt";
        }
      });
  




// function input(){
//     var current = document.getElementById("current").value;
//     var voltage = document.getElementById("voltage").value;

//     console.log(current);
//     console.log(voltage);
// }