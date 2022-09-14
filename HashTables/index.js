const hashStringToInt = (key, tableSize) => {
  let hash = 17;
  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
};

class HashTable {

  table = new Array(100);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = this.hashStringToInt(key, newTable.length);
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable; 
  };
  hashStringToInt(s, tableSize) {}

  setItem(key, value) {
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    const index = this.hashStringToInt(key, this.table.length);
    if (this.table[index]) {
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
    
  }
  getItem = (key) => {
    const index = this.hashStringToInt(key, this.table.length);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].find(x => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Bob');
myTable.setItem('lastName', 'Smith');
console.log(myTable.getItem("firstName"));
