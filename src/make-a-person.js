module.exports = function(firstAndLast) {
  let firstName, lastName;

  this.getFullName = function() {
    return [firstName, lastName].join(' ');
  };

  this.setFullName = function(str) {
    let [first, last] = str.split(' ');
    firstName = first;
    lastName = last;
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.setFirstName = function(str) {
    firstName = str;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setLastName = function(str) {
    lastName = str;
  };

  this.setFullName(firstAndLast);

  return this;
};
