trang_chu = document.getElementById("trang_chu");
quan_ly_lop = document.getElementById("quan_ly_lop");
quan_ly_sv = document.getElementById("quan_ly_sv");

headline = document.getElementById("headline");
context = document.getElementById("context");

trang_chu.onclick = function() {
    headline.innerHTML = "Trang chủ";
    context.innerHTML = "Chào mừng bạn đến với trang quản lý sinh viên!"
    context.style.display = "flex";
}

quan_ly_lop.onclick = function() {
    headline.innerHTML = "Quản lý lớp học";
    context.style.display = "grid";
    context.innerHTML = 
    `
<div class="box">
    <div class="info">
        <span class="number">90</span>
        <span>Tổng số sinh viên</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">12</span>
        <span>Tổng số lớp</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">12</span>
        <span>Tổng số khoa</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">15</span>
        <span>Tổng số chuyên ngành</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">34</span>
        <span>Tổng số đồ án</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">45</span>
        <span>Số sinh viên đạt</span>
    </div>
    <a href="example.com">Xem</a>
</div>

<div class="box">
    <div class="info">
        <span class="number">1</span>
        <span>Số sinh viên chưa đạt</span>
    </div>
    <a href="example.com">Xem</a>
</div>

    `;
}

students.onclick = function() {
    headline.innerHTML = "Quản lý sinh viên";
    context.style.display = "flex";
    context.style.flexDirection = "column";
    context.innerHTML = 
    `
    <button onclick="updateTable()" style="position: absolute; transform: translate(0,-150%);">Refresh</button>
    <table id="studentTable">
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
            <th><input type="file" id="student_image" placeholder="image/*"></th>
            <th><input type="text" id="name" placeholder="Tên"></th>
            <th><input type="date" id="date" placeholder="Tuổi"></th>
            <th><input type="text" id="address" placeholder="Địa chỉ"></th>
            <th><input type="text" id="phone" placeholder="SDT"></th>
            <th><input type="email" id="email" placeholder="Email"></th>
            <th><input type="text" id="ach" placeholder="Thành tích"></th>
            <th><input type="submit" value="Thêm mới" onclick="newstu()"></th>
        </form>
    </tr>
</table>
<form id="editStudentForm" style="display: none;">
    <input type="file" id="edit_student_image" accept="image/*">
    <input type="text" id="edit_name" placeholder="Name">
    <input type="date" id="edit_date" placeholder="Date of Birth">
    <input type="text" id="edit_address" placeholder="Address">
    <input type="text" id="edit_phone" placeholder="Phone">
    <input type="email" id="edit_email" placeholder="Email">
    <input type="text" id="edit_ach" placeholder="Achievements">
    <input type="submit" value="Save Changes">
</form>
    `
};
