'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWER_MODE = true;
  this.MAXIMUM_TEMPERATURE = 25;
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.POWER_MODE;
}

Thermostat.prototype.up = function() {
  if(this.temperature >= this.MAXIMUM_TEMPERATURE) {
    throw 'Cannot go above maximum temperature';
  };
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if(this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw 'Cannot go below minimum temperature';
  };
    this.temperature -= 1;

}

Thermostat.prototype.setPowerSavingMode = function(setting) {
  this.POWER_MODE = setting;
  this.MAXIMUM_TEMPERATURE = this.POWER_MODE ? 25 : 32;
}

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  var check = this.temperature;
  switch(true) {
    case(check < 18):
      return 'low-usage';
      break;
    case(check < 25):
      return 'medium-usage';
      break;
    default:
      return 'high-usage';
      break;
  }
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}
