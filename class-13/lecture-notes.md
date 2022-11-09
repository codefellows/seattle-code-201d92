# Class 13 Lecture Notes

## Data Persistence

### Local Storage

- Object that our browser gives to our JS to use
- Stored on hard drives
  - Local Storage is specific to one computer
- No expiration until you clear the local storage
- Code Fellows Journey
  - 201: Local Storage
  - 301: In-memory "Cache" & NoSQL
  - 401: SQL - Postgres


  ### How it is stored
  
  - Data is stored as a string
  - JSON - JavaScript Object Notation
  - `JSON.stingify();`

  #### Methods
  - `localStorage.setItem(key, value)`
  - `localStorage.getItem(key)`
  - `localStorage.clear()`
  - `localStorge.removeItem()`


#### Retrieveing from Local Storage
  - `JSON.parse()` - reconvert what was stored as a string into data that we can use
  - Parsing stringified objects loses their ability to inherit