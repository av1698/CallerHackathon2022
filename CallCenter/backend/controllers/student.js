const Student = require('../models/student')

exports.getAllStudents = async (req, res, next) => {
    const [allStudents] = await Student.fetchAll();
    res.status(200).json(allStudents)
};

exports.postStudent = async (req, res, next) => {
    const postResponse = await Student.post(req, body, item);
    res.status(201).json(postResponse);
};

