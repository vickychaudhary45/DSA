const obj1 = {
  name: "vicky",
  job: "software engineer",
};

const obj2 = {
  name2: "jonny",
  job2: "db manager",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
