var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});

// output :
/*
address: 172.217.163.36 
reverse for 172.217.163.36: ["maa05s01-in-f4.1e100.net"]
*/

