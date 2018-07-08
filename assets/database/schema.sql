create database sergioveloza;
use sergioveloza;

create table contacto ( 
  id int not null auto_increment primary key,
  name varchar(20) not null,
  email varchar(255) not null,
  mensaje varchar(255) not null,
  created_at datetime not null
  );