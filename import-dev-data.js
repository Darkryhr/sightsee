const fs = require('fs');
require('dotenv').config();
const Vacation = require('./models/vacation');

const vacations = JSON.parse(
  fs.readFileSync(`${__dirname}/vacations.json`, 'utf-8')
);

const importData = () => {
  Vacation.bulkCreate(vacations, {
    validate: true,
    returning: true,
  });
};

const deleteData = () => {
  Vacation.destroy({
    where: {},
    truncate: true,
  });
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
