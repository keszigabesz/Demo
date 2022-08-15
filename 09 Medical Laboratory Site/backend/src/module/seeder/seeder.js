const fsp = require('fs').promises;
const UserModel = require('../../model/user');
const {join} = require('path');

(async () => {
    const userJson = await fsp.readFile(
        join(__dirname, 'user.json'),
        'utf8',
    );
    const users = JSON.parse(userJson);
    await UserModel.insertMany(users);
})()
