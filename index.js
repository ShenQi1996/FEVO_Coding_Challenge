// I am using JavaScript and node.js to run it.

const mergeAccounts = filename => {
  let accounts = require(filename); // read file name
  let data = {};
  // create data object
  for (let account of accounts) {
    // check if the data object contains accout.name
    if (!data[account.name]) {
      // if data object does not contain account.name.
      //we create the object.
      data[account.name] = {
        application: [account.application],
        emails: account.emails,
        name: account.name,
      };
    } else {
      // else account name is in the data object
      data[account.name] = {
        application: [...data[account.name].application, account.application],
        // CleanUpDuplicate function to remove all doplicate
        emails: CleanUpDuplicate(
          data[account.name].emails.concat(account.emails)
        ),
        name: account.name,
      };
    }
  }
  let newData = Object.values(data);

  console.log(newData);
  return newData;
};

const CleanUpDuplicate = arr => {
  // change the array to set and then change back to array
  let NoDuplicate = [...new Set(arr)];
  return NoDuplicate;
};

mergeAccounts("./accounts.json");

// OutPut:
// [
//     {
//         application: [1,2,3],
//         email: [a@gmail.com,b@gmail.com,a@yahoo.com],
//         name: "A"
//     },
//     {
//         application: [1],
//         email: [c@gmail.com,d@gmail.com],
//         name: "C"
//     }
// ]
