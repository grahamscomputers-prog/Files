let e = entry();
let line  = "\n" + "*".repeat(36); 
let line1 = "\n" + "-".repeat(36);
let space = "\n" + " ".repeat(18);
// Clean up job status by removing trailing colon, spaces, and emojis
let totalCost = e.field("total cost");
// Format date and time with moment.js
let apptDate = moment(e.field("repair date")).format("ddd D MMM YYYY"); // e.g. Sat 30 Aug 2025
let apptTime = moment(e.field("appointment date")).format("hh:mm a");        // e.g. 11:00 am
AndroidMessages.sms(
  e.field("mobile"),
  line +
  space + "REPAIR COMPLETE" +
  line +
  "\n" +
  "Hi " + e.field("name") + "," +
  "\n\n" +
e.field("repaired") + "\n\n" +
line1 +
"\n" +
  "📅 Repair Date: " + apptDate + "\n" +
  "💲 Total Cost: $" + totalCost +
line1 +
  "\n\n" +
  e.field("signature")
);
