const generatePassword = (size) => {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let password = "";
    for (let i = 0; i < size; i++) {
      let random = Math.floor(Math.random() * char.length);
      password += char[random];
    }
    return password;
    }
    const password = generatePassword(18);
    console.clear();
    console.log(`Generated password: ${password}`);