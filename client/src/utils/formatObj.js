// Import dependencies
import dayjs from 'dayjs';
import { emptyFormObj } from './emptyFormObj';

// Create and export formatting function so that the same form used to add
// new gigs can be auto-populated with the details of an existing gig returned
// by the API allowing a user to easily update it
export default function formatObj(obj, view) {
  let isClosed = false;

  // Set gig's closed field to true if a view argument is provided
  if (view || obj.closed) {
    isClosed = true;
  }

  // Format date to account for GMT offset
  const adjustedDate = dayjs(new Date(obj.date)).add(12, 'hour').format('YYYY-MM-DD');

  return {
    date: adjustedDate,
    closed: isClosed,
    venue: {
      name: obj.venue.name,
      street: obj.venue.street,
      city: obj.venue.city,
      state: obj.venue.state,
      zip: obj.venue.zip,
      capacity: obj.venue.capacity,
      promoter: obj.venue.promoter,
      email: obj.venue.email
    },
    catering: obj.catering,
    lounge: obj.lounge,
    internet: obj.internet,
    parking: obj.parking,
    showers: obj.showers,
    rider: obj.rider,
    schedule: [
      { timeString: obj.schedule[0].timeString, event: "Load In" },
      { timeString: obj.schedule[1].timeString, event: "Sound Check" },
      { timeString: obj.schedule[2].timeString, event: "Doors" },
      { timeString: obj.schedule[3].timeString, event: obj.schedule[3].event },
      { timeString: obj.schedule[4].timeString, event: obj.schedule[4].event },
      { timeString: obj.schedule[5].timeString, event: obj.schedule[5].event },
      { timeString: obj.schedule[6].timeString, event: obj.schedule[6].event },
      { timeString: obj.schedule[7].timeString, event: "Bus Call" },
    ],
    closingNumbers: {
      presale: obj.closingNumbers.presale,
      doors: obj.closingNumbers.doors,
      comps: obj.closingNumbers.comps,
      guarantee: obj.closingNumbers.guarantee,
      bonus: obj.closingNumbers.bonus,
      merch: {
        gross: obj.closingNumbers.merch.gross,
        comped: obj.closingNumbers.merch.comped,
        split: obj.closingNumbers.merch.split,
        scans: obj.closingNumbers.merch.scans
      }
    }
  }
}