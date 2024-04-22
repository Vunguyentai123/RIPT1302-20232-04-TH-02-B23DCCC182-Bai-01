let students = [];

function addStudent(student) {
    students.push(student);
    updateTable();
}

function deleteStudent(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này?")) {
        students.splice(index, 1);
        updateTable();
    }
}

function editStudent(index) {
    let student = students[index];


    let student_image = document.getElementById("edit_student_image");
    let name = document.getElementById("edit_name");
    let date = document.getElementById("edit_date");
    let address = document.getElementById("edit_address");
    let phone = document.getElementById("edit_phone");
    let email = document.getElementById("edit_email");
    let ach = document.getElementById("edit_ach");


    student_image.value = '';
    name.value = student.name;
    date.value = student.date;
    address.value = student.address;
    phone.value = student.phone;
    email.value = student.email;
    ach.value = student.ach;

    document.getElementById("editStudentForm").dataset.index = index;
    document.getElementById("editStudentForm").style.display = "block";
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    newstu();
});

document.getElementById("editStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let index = this.dataset.index;
    let student_image = document.getElementById("edit_student_image").files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        students[index] = {
            student_image: reader.result,
            name: document.getElementById("edit_name").value,
            date: document.getElementById("edit_date").value,
            address: document.getElementById("edit_address").value,
            phone: document.getElementById("edit_phone").value,
            email: document.getElementById("edit_email").value,
            ach: document.getElementById("edit_ach").value
        };

        updateTable();
        document.getElementById("editStudentForm").style.display = "none";
    }

    if (student_image) {
        reader.readAsDataURL(student_image);
    } else {
        students[index] = {
            student_image: students[index].student_image,
            name: document.getElementById("edit_name").value,
            date: document.getElementById("edit_date").value,
            address: document.getElementById("edit_address").value,
            phone: document.getElementById("edit_phone").value,
            email: document.getElementById("edit_email").value,
            ach: document.getElementById("edit_ach").value
        };

        updateTable();
        document.getElementById("editStudentForm").style.display = "none";
    }
});

function updateTable() {

    let table = document.getElementById("studentTable");
    table.innerHTML = `
        <tr>
            <th>Ảnh sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>SDT</th>
            <th>Email</th>
            <th>Thành tích</th>
            <th>Actions</th>
        </tr>
        <tr>
            <form id="studentForm">
                <th><input type="file" id="student_image" placeholder="Ảnh sinh viên"></th>
                <th><input type="text" id="name" placeholder="Tên"></th>
                <th><input type="date" id="date" placeholder="Tuổi"></th>
                <th><input type="text" id="address" placeholder="Địa chỉ"></th>
                <th><input type="text" id="phone" placeholder="SDT"></th>
                <th><input type="email" id="email" placeholder="Email"></th>
                <th><input type="text" id="ach" placeholder="Thành tích"></th>
                <th><input type="submit" value="Thêm mới" onclick=newstu()></th>
            </form>
        </tr>
    `;
    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td><img src="${student.student_image}" alt="Student image" width="100"></td>
                <td>${student.name}</td>
                <td>${student.date}</td>
                <td>${student.address}</td>
                <td>${student.phone}</td>
                <td>${student.email}</td>
                <td>${student.ach}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                    <button onclick="editStudent(${index})">Sửa</button>
                </td>
            </tr>
        `;

    });
}

function newstu() {
    let student_image = document.getElementById("student_image").files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        let student = {
            student_image: reader.result,
            name: document.getElementById("name").value,
            date: document.getElementById("date").value,
            address: document.getElementById("address").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            ach: document.getElementById("ach").value
        };

        students.push(student);
        updateTable();
        }

        if (student_image) {
            reader.readAsDataURL(student_image);
        }
}
