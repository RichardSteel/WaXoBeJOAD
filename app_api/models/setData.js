db.archeryStudents.save({fName: "James", lName: "Collymore", dob: new Date ("8/4/1046"), level: "Cadet", rating: 6,
session: 1, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "Joe", lName: "Bloggs", dob: new Date ("8/4/2001"), level: "Cadet", rating: 5, style: "Compound",
session: 1, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "Julia", lName: "Lam", dob: new Date ("8/4/2001"), level: "Cadet", rating: 8,
session: 1, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "Eddy", lName: "Lam", dob: new Date ("8/4/2001"), level: "Cadet", rating: 5, style: "Compound",
session: 2, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "KC", lName: "Chiu", dob: new Date ("8/4/2001"), level: "Cadet", rating: 5, style: "Compound",
session: 2, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "John", lName: "Nyberg", dob: new Date ("8/4/2001"), level: "Cadet", rating: 5, style: "Compound",
session: 3, sex: "M", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})

db.Students.save({fName: "Jessica", lName: "Alba", dob: new Date ("8/4/2001"), level: "Cadet", rating: 5, style: "Compound",
session: 3, sex: "F", shootScores: [
{shootDate: new Date ("1/1/2014"), score: 123, distance: 18, targetSize: 40},
{shootDate: new Date ("2/1/2014"), score: 145, distance: 18, targetSize: 40},
{shootDate: new Date ("3/1/2014"), score: 155, distance: 18, targetSize: 40},
{shootDate: new Date ("4/1/2014"), score: 165, distance: 18, targetSize: 40},
{shootDate: new Date ("5/1/2014"), score: 176, distance: 18, targetSize: 40},
{shootDate: new Date ("6/1/2014"), score: 200, distance: 18, targetSize: 40},
{shootDate: new Date ("7/1/2014"), score: 210, distance: 18, targetSize: 40}
]
})


db.Students.update({fName: "Alex", lName: "Steel"},
{ $push: { shootScores: {
shootDate: new Date ("2/1/2014"), score: 240, distance: 18, targetSize: 40 }}})

//mongo localhost/WaXoBeJOADDB setData.js
//load("archerScores.js")