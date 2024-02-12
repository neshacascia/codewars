function sayHello(name, city, state) {
  return `Hello, ${name.split('').join('')}! Welcome to ${city}, ${state}`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
