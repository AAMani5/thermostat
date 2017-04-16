## Thermostat

### Specifications

 - Thermostat starts at 20 degrees
 - You can increase the temperature with an up function
 - You can decrease the temperature with a down function
 - The minimum temperature is 10 degrees
 - If power saving mode is on, the maximum temperature is 25 degrees
 - If power saving mode is off, the maximum temperature is 32 degrees
 - Power saving mode is on by default
 - You can reset the temperature to 20 with a reset function
 - You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
 - (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
 - Persist the data on a server. 

### How to use
 - ``` ```
 - ``` ```
 - get an API key and store it in a file called public/config.js as ``` var config = {APPID: <your ID goes here>} ```
 - ``` ruby server.rb ```
 - visit ``` http://localhost:4567/ ```

### Technologies
 - JavaScript
 - Jasmine

### Contributors
 - Ashwini Mani
 - Clem Capel-Bird
