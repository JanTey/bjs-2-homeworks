function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.marks) {
		return;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (!this.marks || !this.marks.length) {
		return 0;
	}
	const sum = this.marks.reduce((acc, index) => acc + index);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}

/*let student1 = new Student("Павел", "мужской", 21);
student1.setSubject("Математический анализ");
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1); 

let student2 = new Student("Мария", "женский", 20);
student2.setSubject("Материаловедение");
student2.exclude("Плохая учеба");
student2.addMark(3);
student2.addMark(2);
student2.exclude('Плохая учеба');
console.log(student2); */
