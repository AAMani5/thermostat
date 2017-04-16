'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('can increase the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
  })

  it('can decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
  })

  it('has a minimum temperature of 10 degrees', function() {
    for(var i = 1; i <= 10; i ++) {
      thermostat.down();
    };
    expect(function() {thermostat.down()}).toThrow('Cannot go below minimum temperature');

    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  })

  it('expect power saving mode to be on as default', function() {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  })

  it('has a maximum temp of 25 degree when power mode is on', function() {
    for(var i = 1; i <= 5; i ++) {
      thermostat.up();
    };
    expect(function() {thermostat.up()}).toThrow('Cannot go above maximum temperature');

    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.currentMaxTemp);
  })

  it('can set power saving mode to off', function(){
    thermostat.setPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false)
  })

  it('has a maximum temp of 32 degree when power mode is off', function() {
    thermostat.setPowerSavingModeOff();
    for(var i = 1; i <= 12; i ++) {
      thermostat.up();
    };
    expect(function() {thermostat.up()}).toThrow('Cannot go above maximum temperature');

    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.currentMaxTemp);
  })

  it('can be reset to default temperature', function() {
    thermostat.up();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  })

  describe('Shows energy usage', function(){

    it('is at low when temperature is below 18 degrees', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('is at medium when temperature is below 25 and above 17 degrees', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('is at high when temperature is above or equal to 25 degrees', function(){
      thermostat.temperature = 25;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });

})
