class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    console.log(this.data)


  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          let val = currentBucket[i][1];
          console.log(val);
        }
      }
    }
  }

  keys()
  {
    const keyArrays = [];
    for(let i = 0; i < this.data.length; i++)
      {
        if(this.data[i])
        {
          keyArrays.push(this.data[i][0][0])
        }
      }
    console.log(keyArrays)
  }
}
                                     
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.set('oranges', 45)
myHashTable.keys()
