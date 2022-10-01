var name = 'hello'

var sayMyName = function () {
  console.log(this.name)
}

var teacher = {
  name: 'Nike'
}

teacher.sayMyName = sayMyName;
teacher.age = 18

console.log("1",sayMyName(this.name))
console.log("2",teacher.sayMyName())
console.log("TEST",teacher)





