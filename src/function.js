const fs = require('fs');

const dataFilePath = 'data/tasks.json';

// Function to read data from the JSON file
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Function to write data to the JSON file
const writeData = (data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataFilePath, jsonData);
        console.log('Data written to the file successfully.');
    } catch (error) {
        console.error('Error writing data to the file:', error);
    }
};

// Function to add a new task to the data
const addTask = (task) => {
    const data = readData();
    data.push(task);
    writeData(data);
};

module.exports = {
    readData,
    writeData,
    addTask,
};
