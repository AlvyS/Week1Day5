function helloFunc() {
  return "Hello "
}

function nameFunc(x) {
  var name = x
  return name
}


module.exports = {
  greet: function() {
    console.log(helloFunc());
  },
  personName: "Alvin",
  nameFunc: function() {
    console.log(nameFunc(this.personName));
  }

}


