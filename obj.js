let man = {};
man.name = "Garry";
man.age = 47;
man.job  = {
    position: "postman",
    salary: 10500,
};
// man.position.first = "1";  // плохая практика вкладывать
// man.position.second = "2";
man.getJob = function() {
    return man.job;
}

console.log( man.getJob());
man.dddd = "rrrr";
delete man.dddd;
man.age = 71;
man.job.salary = 100500;


console.log(man);




///

var john = {

    eyes: {
        left: {
            color: 'green',
            diopt: 10
        },
        right: {
            color: 'green',
            diopt: 10
        },
    },

    _eyes: [
        {
            color: 'green',
            diopt: 10
        },
        {
            color: 'green',
            diopt: -10
        }
    ]
}

john._eyes[0].color;
john.eyes.left.diopt;
john.eyes.left.color = "brown";
john._eyes[1].diopt = 15;
console.log(john);