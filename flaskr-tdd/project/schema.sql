drop table if exists entries;

-- Set up table with three fields: id, title, and text
create table entries (
  id integer primary key autoincrement,
  title text not null,
  text text not null
);