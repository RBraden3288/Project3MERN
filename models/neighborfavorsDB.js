db.attendants.insertMany([
  {
    firstName: "Srirachel",
    lastName: "Sauce",
    email: "hellaspicy@gmail.com",
    password: "N0tTapat!o",
    neighborhood: "Sunset",
    bio:
      "I actually know how to recycle. Down for any task except for feeding rodents.",
    photoUrl: "https://photobucket.com/yum",
    attendant: true,
    date: Date()
  },
  {
    firstName: "Koko",
    lastName: "Dash",
    email: "kdash@gmail.com",
    password: "Passw0rd",
    neighborhood: "SOMA",
    bio: "Like a good neighbor, I'm there.",
    photoUrl: "https://photobucket.com/yummy",
    attendant: true,
    date: Date()
  }
]);

db.clients.insertMany([
  {
    firstName: "Siberyan",
    lastName: "Husky",
    email: "shusky@gmail.com",
    password: "Wh!teClaw7",
    neighborhood: "Sunset",
    bio: "A regular human bean",
    photoUrl: "https://tinypic.com/f",
    residenceType: "house",
    security: "key",
    attendant: false,
    date: Date()
  },
  {
    firstName: "Drew",
    lastName: "Hermit",
    email: "dhermit@gmail.com",
    password: "Pa$$word",
    neighborhood: "SOMA",
    bio: "A lean, clean, human bean",
    photoUrl: "https://images.google.com",
    residenceType: "house",
    security: "key",
    attendant: false,
    date: Date()
  }
]);

db.requests.insertMany([
  {
    tasks: ["Play with cat", "Move large vehicle"],
    startDate: "08/09/2019",
    endDate: "08/10/2019",
    date: Date()
  },
  {
    tasks: ["Sign for packages", "Vaccuum"],
    startDate: "08/12/2019",
    endDate: "08/15/2019",
    date: Date()
  }
]);
