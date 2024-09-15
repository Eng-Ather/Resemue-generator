document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fatherName = (document.getElementById('fatherName') as HTMLInputElement).value;
    const imageInput = document.getElementById('image') as HTMLInputElement;
    const qualification = (document.getElementById('qualification') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Create a FileReader to read the image file
    let imageUrl: string | undefined;

    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            imageUrl = e.target?.result as string;
            generateResume();
        };
        reader.readAsDataURL(file);
    } else {
        generateResume();
    }

    function generateResume() {
        // Generate resume HTML
        const resumeHtml = `
            <div>
                ${imageUrl ? `<img src="${imageUrl}" alt="Profile Image" style="max-width: 200px; height: auto;"/>` : ''}

                <h2>${name}</h2>
                <p><strong>Father's Name:</strong> ${fatherName}</p>
                <p><strong>Qualification:</strong> ${qualification}</p>
                <section>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                </section>
            </div>
        `;

        // Hide the form and display the generated resume
        const resumeForm = document.getElementById('resumeForm');
        const generatedResume = document.getElementById('generatedResume');
        if (resumeForm && generatedResume) {
            resumeForm.style.display = 'none'; // Hide the form
            generatedResume.style.display = 'block'; // Show the resume
            generatedResume.innerHTML = resumeHtml;
        }
    }
});
