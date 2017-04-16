'use strict';
  var thermostat;

$( document ).ready(function() {
  thermostat = new Thermostat();
  displayTemp();
  getOutsideTemp('London');
});

function getOutsideTemp(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='
  var units = '&units=metric'
  var appid = '&APPID=' + config.APPID
  var tempObj = $.get(url+city+units+appid).done(function(data){
    $('#outsideTemp').text(data.main.temp);
  });
}

function psmToogle(){
  thermostat.isPowerSavingModeOn() ? thermostat.setPowerSavingModeOff() : thermostat.setPowerSavingModeOn();
  thermostat.isPowerSavingModeOn() ? $('#psm-btn').css('background-color', 'green') : $('#psm-btn').css('background-color', 'red');
};

$('#select-city').change(function(){
  getOutsideTemp($(this).val());
})

$("#resetTemp").click(function(){
  thermostat.resetTemp();
  displayTemp();
});

$("#upTemp").click(function(){
  thermostat.up();
  displayTemp();
});

$("#downTemp").click(function(){
  thermostat.down();
  displayTemp();
});


function displayTemp(){
  // storedTemp = storedTemp() || thermostat.getCurrentTemperature();
  $('#currentTemp').text(thermostat.getCurrentTemperature());
  storeCurrentTemp(thermostat.getCurrentTemperature());
  storedTemp();
  changeClass();
}

function changeClass(){
  $('#energyUsage').removeClass();
  $('#energyUsage').addClass(thermostat.energyUsage());
}

function storedTemp(temp){
  $.get('http://localhost:4567/temperature/current',function(temp){ console.log(temp);});
}

function storeCurrentTemp(temp){
  $.post('http://localhost:4567/temperature/current',{currentTemp : temp});
}
