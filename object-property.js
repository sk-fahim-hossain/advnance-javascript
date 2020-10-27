const Name = 0;
const students = [
    { id: 21, name: "Deepljol" },
    { id: 31, name: "Manna" },
    { id: 51, name: "Shakib" },
    { id: 71, name: "OmorSunny" },
]

const names = students.map(x => x.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 50);
console.log(bigger);