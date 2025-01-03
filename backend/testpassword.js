const bcrypt = require('bcrypt');

const testPassword = async () => {
    const password = "12345"; // Replace with the password you want to test
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Password Match:", isMatch); // Should log true
};

testPassword();