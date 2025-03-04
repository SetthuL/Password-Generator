function generatePassword() {
    console.log("Generate password function is running!");

    let length = document.getElementById("length").value;
    let includeNumbers = document.getElementById("includeNumbers").checked;
    let includeSymbols = document.getElementById("includeSymbols").checked;

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&><?*;:+-";

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").value = password;
    updateStrength(password);
}

function copy_password() {
    let password_field = document.getElementById("password");
    password_field.select();
    password_field.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password_field.value).then(() => {
       alert("Password copied!"); 
    }).catch(err => {
        console.error("Failed to copy password!:", err);
    });
    
}

function updateStrength(password) {
    let strength_bar = document.getElementById("strength_bar");
    let strength_text = document.getElementById("strength_text");

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&><?*;:+-]/.test(password)) strength++;

    if (strength === 0)
    {
        strength_bar.style.width = "0%";
        strength_bar.style.background = "gray";
        strength_text.textContent = "Strength: Too Weak";
    }

    else if (strength === 1)
    {
        strength_bar.style.width = "33%";
        strength_bar.style.background = "red";
        strength_text.textContent = "Strength: Weak";
    }

    else if (strength === 2)
    {
        strength_bar.style.width = "66%";
        strength_bar.style.background = "orange";
        strength_text.textContent = "Strength: Medium";
    }

    else
    {
        strength_bar.style.width = "100%";
        strength_bar.style.background = "green";
        strength_text.textContent = "Strength: Strong";
    }
}