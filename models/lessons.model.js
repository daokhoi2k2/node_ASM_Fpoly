const lesson = require("../schema/lessons.schema");

module.exports = {
  getAllLesson: () => {
    lesson.find().then((data) => {
      console.log(data)
    })
  }
}