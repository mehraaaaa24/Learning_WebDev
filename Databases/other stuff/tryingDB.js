const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb+srv://harshulwork24:%40Warrobots13@cluster0.q6cyufk.mongodb.net/user_app?retryWrites=true&w=majority");

  const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
  });

  const user = new User({
    name: 'Harshul Mehra',
    email: 'harshulmi13@gmail.com',
    password: '12345',
  });

  await user.save();
  console.log("User saved successfully.");
  await mongoose.disconnect();
}

main().catch(err => console.error("Connection failed:", err));
