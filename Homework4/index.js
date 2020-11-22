// 1 завдання
function testThrow(exception) {
  try {
    throw exception;
  } catch (error) {
    console.log("Caught:" + " " + error);
  }
}

testThrow(5);
testThrow("test");
testThrow(new Error("An error happened"));

// 2 завдання
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "NaN as a number";
  }
  return width * height;
}
try {
  console.log(calcRectangleArea(5, "sda"));
} catch (error) {
  console.log(error);
}

// 3 завдання

function checkAge() {
  let age = Number(prompt("Введіть свій вік"));
  if (age === 0) {
    throw new Error("The field is empty! Please enter your age");
  } else if (isNaN(age)) {
    throw new Error("This field is not a number! Please enter number");
  } else if (age < 14) {
    throw new Error("Sorry but you to young");
  }

  return "Welcome,lets see the film";
}

try {
  console.log(checkAge());
} catch (error) {
  console.log(error);
}

// 4 завдання

class MonthException {
  constructor(message) {
    this.message = message;
    name: "MonthException";
  }
}

function showMonthName(month) {
  let allMonth = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  if (Number(month)) {
    return allMonth[month];
  } else {
    throw new MonthException("Incorrect month number");
  }
}

try {
  console.log(showMonthName("asdasd"));
} catch (error) {
  console.log(error);
}


// 5 завдання

function showUser(id) {
  if (id < 0) {
    throw new Error(`ID must not be negative: ${id}`);
  }
  return {
    id: id,
  };
}

function showUsers(ids) {
  try {
    for (let i = 0; i < ids.length; i++) {
      showUser(ids[i]);
    }
  } catch (error) {
    console.log(error);
  }

  ids.forEach((item, i, arr) => {
    if (item > 0) {
      return (arr[i] = { id: item });
    }
  });

  ids.forEach((item, i, arr) => {
    if (item < 0) {
      arr.splice(i, 1);
    }
  });

  return ids;
}

try {
  console.log(showUsers([7, -12, 44, 22]));
} catch (e) {
  console.log(e);
}
