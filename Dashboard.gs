function myFunction() {
  var dataSheet = SpreadsheetApp.open(DriveApp.getFileById("1BAw9dXFaFXYoEFQa8h55MQj0po6qYxcN-HxnN2mrCbM")).getActiveSheet();
  var dashboardSheet = SpreadsheetApp.getActiveSheet();

  var lastRow = dataSheet.getLastRow();
   lastRow=lastRow-1;

  var lastDate = dataSheet.getRange(lastRow, 3).getValue();

  var entriesOnLastDate = dataSheet.getRange(lastRow+1, 1).getValue();

  var entriesOnPreviousDay = dataSheet.getRange(lastRow - 1, 2).getValue();

  var difference = entriesOnLastDate - entriesOnPreviousDay;
  
 var activeCell = dashboardSheet.getActiveCell();
  var col = activeCell.getColumn();
   var row = activeCell.getRow();
  dashboardSheet.getRange(row, col).setValue(lastDate);
  dashboardSheet.getRange(row, col).setValue(entriesOnLastDate);
  dashboardSheet.getRange(row, col).setValue(difference);

}
