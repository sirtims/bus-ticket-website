class Users {
  userData = [];
  localStorageName = "ticket-bus";
  constructor() {
    this.userData = [
      ...(JSON.parse(localStorage.getItem(this.localStorageName)) || []),
     ];
  }

  create = (data) => {
    if (!data?.username) throw Error("Username is required");
    if (!data?.email) throw Error("Email is required");
    if (!data?.password) throw Error("Password is required");
    this.userData.push(data);
    this.save();
  };

  update = (field, value, newData) => {
    if (!field || !value || !newData) throw Error("Required parameter missing");
    this.userData.map((user) => {
      if (field === value) {
        user = { ...user, newData };
      }
    });
    this.save();
  };
  delete = (field, value) => {
    if (!field || !value) throw Error("Required parameter missing");
    this.userData.filter((user) => user[field] !== value);
    this.save();
  };

  find(obj) {
    const keys = Object.keys(obj);
    return this.userData.filter((item) => {
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!item.hasOwnProperty(key) || item[key] !== obj[key]) {
          return false;
        }
      }
      return true;
    });
  }

  save = () => {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.userData));
  };
}
