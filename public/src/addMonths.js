function addMonths(dt, dt_, n) {
   return new Date(dt.setMonth(dt_ + n));
}

module.exports = {addMonths};
