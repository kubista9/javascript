function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({name, count: 1});
      } else {
        known.count++;
      }
 }
    return counts;
  }
 console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
 // → [{name: false, count: 2}, {name: true, count: 3}]