function UserGenerator() {
  var Chance = require("chance");
  var chance = new Chance;

  var schema = {
    "type": "SCHEMA",
    "stream": "fake-users",
    "key_properties": ["id"],
    "schema": {
      "type": "object",
      "properties": {
        "id": {"type": "integer"},
        "firstName": {"type": "string"},
        "lastName": {"type": "string"},
        "email": {"type": "string"},
        "createdAt": {"type": "string", "format": "date-time"}
      }
    }
  };

  function getEmailDomain() {
    return chance.pickone(['gmail.com', 'yahoo.com', 'hotmail.com', 'zombo.com']);
  }

  function getRecord(id) {
    return {
      type: "RECORD",
      stream: "fake-users",
      record: getUser(id)
    }
  }

  function getUser(id) {
    first = chance.first();
    last = chance.last();
    return {
      id: id,
      firstName: first,
      lastName: last,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@${getEmailDomain()}`,
      createdAt: chance.date({year: 2017})
    }
  }

  var ug = {};

  ug.sendUsers = function(total) {
    console.log(JSON.stringify(schema));
    for(i=0; i<total; i++) {
        console.log(JSON.stringify(getRecord(i)));
    }
  }

  return ug;
}

var ug = new UserGenerator();
var total = 1000;
ug.sendUsers(1000);
