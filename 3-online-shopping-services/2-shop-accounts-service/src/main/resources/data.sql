
drop table ACCOUNTS;

create table ACCOUNTS(
	username varchar(30) primary key,
	password varchar(30),
	name varchar(30),
	email varchar(30),
	mobile varchar(30)
);

insert into ACCOUNTS values ('user1','user1','User One','user1@email.com','1234567891');
insert into ACCOUNTS values ('user2','user2','User Two','user2@email.com','1234567892');
