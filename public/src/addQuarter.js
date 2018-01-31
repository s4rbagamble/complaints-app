function addQuarter(d) {
  var q;
  if (d <= 2) {
    q = "1";
  } else if (d <= 5) {
    q = "2";
  } else if (d <= 8) {
    q = "3";
  } else if (d <= 11) {
    q = "4";
  }
  return q;
}

module.exports = {addQuarter};
