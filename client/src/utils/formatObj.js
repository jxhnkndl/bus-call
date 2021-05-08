// Import dependencies
import dayjs from 'dayjs';
import { emptyFormObj } from './emptyFormObj';

export default function formatObj(obj) {
  return {
    date: dayjs(obj.date).format('YYYY-MM-DD'),
    venue: {
      name: obj.venue.name,
      street: obj.venue.street,
      city: obj.venue.city,
      state: obj.venue.state,
      zip: obj.venue.zip,
      capacity: obj.venue.capacity,
      presale: obj.venue.presale
    },
    catering: obj.catering,
    greenrooms: obj.greenrooms,
    internet: obj.internet,
    parking: obj.parking,
    showers: obj.showers,
    rider: obj.rider,
    schedule: [
      { timeString: obj.schedule[0].timeString, event: "Load In" },
      { timeString: obj.schedule[1].timeString, event: "Sound Check" },
      { timeString: obj.schedule[2].timeString, event: "Doors" },
      { timeString: obj.schedule[3].timeString, event: "Opener" },
      { timeString: obj.schedule[4].timeString, event: "Second" },
      { timeString: obj.schedule[5].timeString, event: "Direct" },
      { timeString: obj.schedule[6].timeString, event: "Headliner" },
      { timeString: obj.schedule[7].timeString, event: "Bus Call" },
    ]
  }
}