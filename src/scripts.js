function generatePassword() {

    let length = document.getElementById("length").value;
    let includeNumbers = document.getElementById("includeNumbers").Checked;
    let includeSymbols = document.getElementById("includeSymbols").Checked;

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

