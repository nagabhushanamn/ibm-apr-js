
create table ACCOUNTS(
	num varchar(12) primary key,
	holderName varchar(50),
	balance double,
	type varchar(10),
	status varchar(10)
);
insert into ACCOUNTS values('1','Nag',1000.00,'SAVING','ACTIVE');
insert into ACCOUNTS values('2','Ria',1000.00,'SAVING','ACTIVE');
