let obj={}


try {
    //Things to trigger catch block
    // 1. throw new Error('Error Message')
    // 2. throw `some string here describing error`
    // 3. trying to work with an undefined value
} catch (error) {
    //Two error types
    //1. Error String
    //2. Error Object - new Error() or by JavaScript
}


const locations = {
    "40.35": {
      "-105.81":"ROCKY-MOUNTAINS",
      "22.54":"KATERINI-GREECE"
     },
    "28.66": {
      "-105.81":"CHIHUAHUA-MEXICO"
     }
   };
   
   function goToSecretLocation(lat, lon, passcode) {
    
     if (!lat || !lon || !passcode) {
       throw "latitude, longitude, and passcode are required!";
     }
   
     let result;
     try {
       if (locations[lat][lon] === passcode) {
         result ="Welcome.";
       } else {
         throw "Nothing to see here!";
       }
     } catch (error) {
       if (typeof error ==="string") {
         result = error;
       } else {
         result ="You look around and don't see a thing.";
         
       }
     }
   
     return result;
   }
   
   console.log(`ERROR: ${goToSecretLocation('40.35','30.44','password')}`);

