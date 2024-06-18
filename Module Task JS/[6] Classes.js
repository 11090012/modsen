class University {
  name = "БГУИР";
  faculties = ["ФКП", "ФИТУ", "ФРЭ", "ФКСиС", "ФИБ", "ИЭФ", "ВФ"];
  departments = [];
  addDepartment(department) {
    this.departments.push(department);
  }
  deleteDepartment(department) {
    if (this.departments.includes(department)) {
      this.departments = this.departments.filter(
        (element) => element !== department
      );
    } else {
      alert("Такого отдела не существует!");
    }
  }
  showDepartments() {
    alert(this.departments.join("\n"));
  }

  addFaculty(faculty) {
    this.faculties.push(faculty);
  }

  deleteFaculty(faculty) {
    if (this.faculties.includes(faculty)) {
      this.faculties = this.faculties.filter((element) => element !== faculty);
    } else {
      alert("Такого факультета не существует!");
    }
  }

  showFaculties() {
    alert(this.faculties.join("\n"));
  }
}

let unik = new University();

unik.addDepartment("lol"); // добавим отдел
unik.addDepartment("ahaha"); // добавим отдел
unik.showDepartments(); //выведем добавленные отделы в alert
unik.deleteDepartment("ohoho"); // удалим несуществующий отдел
unik.deleteDepartment("ahaha"); // удалим отдел
unik.showDepartments(); //выведем все отделы в alert
unik.showFaculties(); //выведем все факультеты
unik.addFaculty("ФКиД"); // добавим факультет кибеспорта и древолазания
unik.deleteFaculty("ФИБ"); //удалим ФИБ
unik.showFaculties(); //выведем все факультеты
