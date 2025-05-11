import Student from "../Models/student.js";

export function getStudent(req, res) {
    Student.find().then(
        (students) => {
            //console.log(students);
            res.json(students);
        }

    ).catch(
        () => {
            console.log("failed to fetch students.");
            res.json({
                message: "Error fetching students",
            });
        }
    )
}

export function addStudent(req, res) {
    console.log(req.body);

    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    });

    student.save().then(() => {
        res.json({
            message: "Student saved to database",
        });
    }
    ).catch(() => {
        res.json({
            message: "Error saving student to database",
        });
    });
} 