// Create and export empty form object
export const emptyFormObj = {
  date: '',
  venue: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    capacity: '0',
    presale: '0',
  },
  catering: false,
  internet: false,
  showers: false,
  greenrooms: false,
  parking: false,
  rider: false,
  distance: 'N/A',
  schedule: [
    { timeString: '12:00 PM', event: 'Load In' },
    { timeString: '3:00 PM', event: 'Soundcheck' },
    { timeString: '6:00 PM', event: 'Doors' },
    { timeString: '7:00 - 7:30 PM', event: 'The Bigger Lights' },
    { timeString: '7:45 - 8:15 PM', event: 'The Summer Set' },
    { timeString: '8:30 - 9:15 PM', event: 'This Providence' },
    { timeString: '9:30 - 10:50 PM', event: 'Cartel' },
    { timeString: '2:00 AM', event: 'Bus Call' },
  ]
}