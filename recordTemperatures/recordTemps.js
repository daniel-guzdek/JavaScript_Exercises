function recordTemps(records, currentWeek) {
  let newRecords = [];

  for(let i = 0; i < records.length; i++) {
    if(records[i][0] < currentWeek[i][0]) {
      newRecords.push([records[i][0]]); 
    } else { 
      newRecords.push([currentWeek[i][0]]); 
    }

    if(records[i][1] < currentWeek[i][1]) {
      newRecords[i].push(currentWeek[i][1]);
    } else { 
      newRecords[i].push(records[i][1]); 
    }
  }

  return newRecords;
}

module.exports = recordTemps;