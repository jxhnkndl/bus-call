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
  schedule: [
    { timeString: '', event: 'Load In' },
    { timeString: '', event: 'Soundcheck' },
    { timeString: '', event: 'Doors' },
    { timeString: '', event: 'Opener' },
    { timeString: '', event: 'Second' },
    { timeString: '', event: 'Direct' },
    { timeString: '', event: 'Headliner' },
    { timeString: '', event: 'Curfew' },
    { timeString: '', event: 'Bus Call' },
  ]
}

