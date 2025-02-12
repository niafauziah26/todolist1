let tasks = [];

// Fungsi untuk menampilkan tugas
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Kosongkan daftar tugas
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task.nama} - ${task.status} - ${task.prioritas} - ${task.tanggal}
            <button onclick="markAsComplete(${index})">Tandai Selesai</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Hapus</button>
        `;
        taskList.appendChild(li);
    });
}

// Fungsi untuk menambah tugas
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    const taskName = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskDate = document.getElementById('taskDate').value;

    if (taskName && taskPriority && taskDate) {
        tasks.push({
            nama: taskName,
            status: 'belum selesai',
            prioritas: taskPriority,
            tanggal: taskDate
        });
        displayTasks();
        this.reset(); // Reset form
    } else {
        alert('Semua field harus diisi!');
    }
});

// Fungsi untuk menandai tugas sebagai selesai
function markAsComplete(index) {
    if (tasks[index]) {
        tasks[index].status = 'selesai';
        displayTasks();
    }
}

// Fungsi untuk mengedit tugas
function editTask(index) {
    const taskName = prompt("Edit Nama Tugas:", tasks[index].nama);
    const taskPriority = prompt("Edit Prioritas:", tasks[index].prioritas);
    const taskDate = prompt("Edit Tanggal:",