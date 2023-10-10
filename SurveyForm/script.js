function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const male = document.getElementById('male').checked;
    const female = document.getElementById('female').checked;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (firstName && lastName && dob && country && (male || female) && profession && email && mobile) {
        const popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${male ? 'Male' : 'Female'}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        document.getElementById('popupContent').innerHTML = popupContent;
        document.getElementById('popup').style.display = 'flex';
    } else {
        alert('Please fill out all the fields.');
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
    document.getElementById('popup').style.display = 'none';
}
