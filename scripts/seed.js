// Dependencies
const mongoose = require('mongoose');
const db = require('../models');

// Configure environmental variables
require('dotenv').config();

// Local DB
const localdb = `mongodb://${process.env.LOCALDB_HOST}/${process.env.LOCALDB_NAME}`;

// Atlas DB
const atlasdb = `mongodb+srv://${process.env.ATLASDB_USER}:${process.env.ATLASDB_PASS}@jxhnkndl-dbs.d5dpb.mongodb.net/${process.env.ATLASDB_NAME}?retryWrites=true&w=majority`;

// Connect to database
mongoose.connect(process.env.MONGODB_URI || localdb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Gigs collection seed
const seed = [
  {
    date: new Date('2021-10-23'),
    closed: true,
    venue: {
      name: 'Bourbon Street Quarter',
      street: '316 Guilford Avenue',
      city: 'Baltimore',
      state: 'MD',
      zip: '21212',
      capacity: 450,
      promoter: 'Paul Manna',
      email: 'paul@booking.com'
    },
    catering: true,
    internet: true,
    lounge: true,
    showers: true,
    parking: true,
    rider: true,
    schedule: [
      {
        timeString: '12:30 PM',
        event: 'Load in',
      },
      {
        timeString: '3:30 PM',
        event: 'Sound Check',
      },
      {
        timeString: '6:30 PM',
        event: 'Doors',
      },
      {
        timeString: '7:30 - 8:00 PM',
        event: 'The Bigger Lights',
      },
      {
        timeString: '8:15 - 8:45 PM',
        event: 'Anarbor',
      },
      {
        timeString: '9:00 - 9:45 PM',
        event: 'This Providence',
      },
      {
        timeString: '10:05 - 11:20 PM',
        event: 'Cartel',
      },
      {
        timeString: '2:00 AM',
        event: 'Bus Call',
      },
    ],
    closingNumbers: {
      presale: 388,
      doors: 51,
      comps: 17,
      guarantee: 750.00,
      merch: {
        gross: 500.00,
        split: 1.00,
        soundscan: 29
      }
    }
  },
  {
    date: new Date('2021-10-24'),
    closed: true,
    venue: {
      name: 'School of Rock',
      street: '31 Schrieffer St.',
      city: 'South Hackensack',
      state: 'NJ',
      zip: '07606',
      capacity: 480,
      promoter: 'Heath Miller',
      email: 'heath@booking.com'
    },
    catering: true,
    lounge: true,
    internet: true,
    showers: false,
    parking: true,
    rider: true,
    schedule: [
      {
        timeString: '2:00 PM',
        event: 'Load in',
      },
      {
        timeString: '4:30 PM',
        event: 'Sound Check',
      },
      {
        timeString: '6:30 PM',
        event: 'Doors',
      },
      {
        timeString: '7:30 - 8:00 PM',
        event: 'The Bigger Lights',
      },
      {
        timeString: '8:15 - 8:45 PM',
        event: 'Anarbor',
      },
      {
        timeString: '9:00 - 9:45 PM',
        event: 'This Providence',
      },
      {
        timeString: '10:05 - 11:20 PM',
        event: 'Cartel',
      },
      {
        timeString: '2:00 AM',
        event: 'Bus Call',
      },
    ],
    closingNumbers: {
      presale: 403,
      doors: 63,
      comps: 23,
      guarantee: 750.00,
      merch: {
        gross: 600.00,
        split: 0.85,
        soundscan: 41
      }
    }
  },
  {
    date: new Date('2021-10-25'),
    closed: false,
    venue: {
      name: 'Trocadero',
      street: '1003 Arch St.',
      city: 'Philadelphia',
      state: 'PA',
      zip: '19107',
      capacity: 1200,
      promoter: 'Jon Hampton',
      email: 'jon@booking.com'
    },
    catering: true,
    lounge: true,
    internet: true,
    showers: true,
    parking: false,
    rider: true,
    schedule: [
      {
        timeString: '2:00 PM',
        event: 'Load in',
      },
      {
        timeString: '4:30 PM',
        event: 'Sound Check',
      },
      {
        timeString: '7:00 PM',
        event: 'Doors',
      },
      {
        timeString: '7:30 - 8:00 PM',
        event: 'The Bigger Lights',
      },
      {
        timeString: '8:15 - 8:45 PM',
        event: 'Anarbor',
      },
      {
        timeString: '9:00 - 9:45 PM',
        event: 'This Providence',
      },
      {
        timeString: '10:00 - 10:55 PM',
        event: 'Cartel',
      },
      {
        timeString: '1:00 AM',
        event: 'Bus Call',
      },
    ],
    closingNumbers: {
      presale: 867,
      doors: 201,
      comps: 21,
      guarantee: 750.00,
      merch: {
        gross: 1200.00,
        split: 0.85,
        soundscan: 72
      }
    }
  },
  {
    date: new Date('2021-10-27'),
    closed: false,
    venue: {
      name: 'Gramercy Theatre',
      street: '127 E. 23rd St.',
      city: 'New York',
      state: 'NY',
      zip: '10010',
      capacity: 650,
      promoter: 'Sean McDonough',
      email: 'sean@booking.com'
    },
    catering: true,
    lounge: true,
    internet: true,
    showers: false,
    parking: false,
    rider: true,
    schedule: [
      {
        timeString: '2:30 PM',
        event: 'Load in',
      },
      {
        timeString: '4:30 PM',
        event: 'Sound Check',
      },
      {
        timeString: '6:30 PM',
        event: 'Doors',
      },
      {
        timeString: '7:15 - 7:45 PM',
        event: 'The Bigger Lights',
      },
      {
        timeString: '8:00 - 8:30 PM',
        event: 'Anarbor',
      },
      {
        timeString: '8:45 - 9:15 PM',
        event: 'This Providence',
      },
      {
        timeString: '9:30 - 10:45 PM',
        event: 'Cartel',
      },
      {
        timeString: '3:00 AM',
        event: 'Bus Call',
      },
    ],
    closingNumbers: {
      presale: 650,
      doors: 0,
      comps: 35,
      guarantee: 750.00,
      merch: {
        gross: 1200.00,
        split: 0.85,
        soundscan: 72
      }
    }
  },
  {
    date: new Date('2021-10-28'),
    closed: false,
    venue: {
      name: 'Harpers Ferry',
      street: '158 Brighton Ave.',
      city: 'Allston',
      state: 'MA',
      zip: '02134',
      capacity: 400,
      promoter: 'Mike Delehanty',
      email: 'mike@booking.com'
    },
    catering: true,
    lounge: true,
    internet: true,
    showers: true,
    parking: true,
    rider: true,
    schedule: [
      {
        timeString: '2:00 PM',
        event: 'Load in',
      },
      {
        timeString: '4:00 PM',
        event: 'Sound Check',
      },
      {
        timeString: '6:30 PM',
        event: 'Doors',
      },
      {
        timeString: '7:00 - 7:30 PM',
        event: 'The Bigger Lights',
      },
      {
        timeString: '7:45 - 8:15 PM',
        event: 'Anarbor',
      },
      {
        timeString: '8:30 - 9:15 PM',
        event: 'This Providence',
      },
      {
        timeString: '9:30 - 10:50 PM',
        event: 'Cartel',
      },
      {
        timeString: '2:00 AM',
        event: 'Bus Call',
      },
    ],
    closingNumbers: {
      presale: 181,
      doors: 43,
      comps: 29,
      guarantee: 750.00,
      merch: {
        gross: 350.00,
        split: 1.00,
        soundscan: 19
      }
    }
  }
];

// When seeding, clear the collection out and repopulate it
db.Gig.deleteMany({})
  .then(() => db.Gig.collection.insertMany(seed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
