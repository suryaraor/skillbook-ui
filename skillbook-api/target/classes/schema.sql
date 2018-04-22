drop table if exists skillbook;
create table skillbook
(
   id integer not null,
   name varchar(255) not null,
   skill varchar(255) not null,
   points varchar(255) not null,
   primary key(id)
);