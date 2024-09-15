var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    // Retrieve form values
    var name = document.getElementById('name').value;
    var fatherName = document.getElementById('fatherName').value;
    var imageInput = document.getElementById('image');
    var qualification = document.getElementById('qualification').value;
    var experience = document.getElementById('experience').value;
    // Create a FileReader to read the image file
    var imageUrl;
    if (imageInput.files && imageInput.files[0]) {
        var file = imageInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            generateResume();
        };
        reader.readAsDataURL(file);
    }
    else {
        generateResume();
    }
    function generateResume() {
        // Generate resume HTML
        var resumeHtml = "\n            <div>\n                ".concat(imageUrl ? "<img src=\"".concat(imageUrl, "\" alt=\"Profile Image\" style=\"max-width: 200px; height: auto;\"/>") : '', "\n\n                <h2>").concat(name, "</h2>\n                <p><strong>Father's Name:</strong> ").concat(fatherName, "</p>\n                <p><strong>Qualification:</strong> ").concat(qualification, "</p>\n                <section>\n                    <h3>Experience</h3>\n                    <p>").concat(experience, "</p>\n                </section>\n            </div>\n        ");
        // Hide the form and display the generated resume
        var resumeForm = document.getElementById('resumeForm');
        var generatedResume = document.getElementById('generatedResume');
        if (resumeForm && generatedResume) {
            resumeForm.style.display = 'none'; // Hide the form
            generatedResume.style.display = 'block'; // Show the resume
            generatedResume.innerHTML = resumeHtml;
        }
    }
});
