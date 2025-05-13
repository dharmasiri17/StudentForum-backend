import Student from "../Models/student.js";

export function getStudent(req, res) {
    Student.find()
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((err) => {
            console.error("Failed to fetch students:", err);
            res.status(500).json({
                message: "Error fetching students",
            });
        });
}

export function addStudent(req, res) {
    console.log("Request body:", req.body);  // Log the request body to ensure data is coming through

    const { name, age, email } = req.body;
    if (!name || !age || !email) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if student already exists (based on email or other unique field)
    Student.findOne({ email }).then((existingStudent) => {
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this email already exists." });
        }

        const student = new Student({
            name,
            age,
            email
        });

        student.save()
            .then(() => {
                res.status(201).json({
                    message: "Student saved to database",
                });
            })
            .catch((err) => {
                console.error("Error saving student to database:", err);
                res.status(500).json({
                    message: "Error saving student to database",
                    error: err.message,  // Log the error message to understand what went wrong
                });
            });
    }).catch((err) => {
        console.error("Error checking for existing student:", err);
        res.status(500).json({
            message: "Error checking for existing student",
        });
    });
}


export function deleteStudent(req, res) {
    const id = req.params.id;

    Student.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Student deleted successfully." });
        })
        .catch((err) => {
            console.error("Delete error:", err);
            res.status(500).json({ message: "Failed to delete student." });
        });
}

export function updateStudent(req, res) {
    const id = req.params.id;

    // Validate input
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    Student.findByIdAndUpdate(id, {
        name,
        age,
        email
    }, { new: true }) // `new: true` returns the updated document
        .then((updatedStudent) => {
            if (!updatedStudent) {
                return res.status(404).json({ message: "Student not found." });
            }
            res.status(200).json({ message: "Student updated successfully.", updatedStudent });
        })
        .catch((err) => {
            console.error("Update error:", err);
            res.status(500).json({ message: "Failed to update student." });
        });
}

// 💥 NEW FUNCTION: Delete student by email
export function deleteStudentByEmail(req, res) {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required to delete student." });
    }

    Student.findOneAndDelete({ email })
        .then((deletedStudent) => {
            if (!deletedStudent) {
                return res.status(404).json({ message: "No student found with that email." });
            }
            res.status(200).json({ message: "Student deleted successfully by email." });
        })
        .catch((err) => {
            console.error("Delete by email error:", err);
            res.status(500).json({ message: "Failed to delete student by email." });
        });
}

