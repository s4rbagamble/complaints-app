const addQuarter = require('./addQuarter');
const addMonths = require('./addMonths');

function dataSort(data) {
    var temp1 = [], temp2 = [];
    for (var i=1;i<data.length;i++) {
      var d1 = new Date(data[i-1].Month);
      var d2 = new Date(data[i].Month);
      var d3 = addMonths.addMonths(d1, d1.getMonth(), 1);
      var d3_q = addQuarter.addQuarter(d3.getMonth());

      if (d3 < d2 || d3 > d2) {
        temp1.push({ Quarter:d3_q, Month:d3, Complaints:'', UnitsSold:'', ComplaintsRunningTot:'', UnitsSoldRunningTot:'' })
      }
    }

    var complaintsTot = 0;
    var unitsTot = 0;

    for (var i=0;i<data.length;i++) {
      complaintsTot += data[i].Complaints;
      unitsTot += data[i].UnitsSold;

      temp2.push({Quarter:data[i].Quarter, Month:new Date(data[i].Month), Complaints:(data[i].Complaints), UnitsSold:data[i].UnitsSold, ComplaintsRunningTot: complaintsTot, UnitsSoldRunningTot: unitsTot })
    }

    var merge = temp2.concat(temp1);
    data = _.sortBy(merge, ['Month']);
    return data;

}

module.exports.dataSort = dataSort;
