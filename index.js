// Declaring and initializing the attendee obj
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00,
  checkedIn: false
}

// Logging attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name)
}

// logging ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

// Updating ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType
}

// Updating ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Removing event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Checking in property
function addCheckedInProperty(attendee) {
  attendee.checkedIn= true;
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};