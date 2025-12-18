document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const fields = [
        'name', 'dob', 'age', 'school-name-10', 'marks-10',
        'school-name-12', 'marks-12', 'address', 'mobile', 'email', 'stream', 'course'
    ];

    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value.trim() === "") {
            isValid = false;
            input.style.border = "2px solid red";  // Highlight empty fields
        } else {
            input.style.border = "";
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById('admission-form').reset();  // Reset form after submission
    } else {
        alert("Please fill all required fields.");
    }
});

// Dynamic course selection based on stream
document.getElementById('stream').addEventListener('change', function() {
    const stream = this.value;
    const courseSelect = document.getElementById('course');
    let courses = [];

    // Clear previous course options
    courseSelect.innerHTML = '<option value="">Select Course</option>';

    let courses = [];

    if (stream === "Science") {
        courses = ["B.Sc", "B.Sc IT", "BCA", "B.Tech"];
    } 
    else if (stream === "Commerce") {
        courses = ["B.Com", "BBA", "BMS", "MBA"];
    } 
    else if (stream === "Arts") {
        courses = ["BA", "BBA", "BSW", "MA"];
    }

    // Add the new course options
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course;
        option.textContent = course;
        courseSelect.appendChild(option);
    });
});
