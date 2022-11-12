create table usuarios(id serial, identificacion varchar(50), nombre varchar(50), apellido varchar(50), nacimiento date, direccion varchar(50), sangre varchar(50));


insert into "usuarios"("identificacion","nombre","apellido","nacimiento","direccion","sangre") 
values("27080311", "tony", "gonzalez", "19-11-1999","ciudad jardin","O-");
dinamico

insert into "usuarios"("identificacion","nombre","apellido","nacimiento","direccion","sangre") 
values("$1","$2","$3","$4","$5","$6");

{
    "identificacion":" ",
    "apellido":" ",
    "nombre":" ",
    "nacimiento":" ",
    "direccion":" ",
    "sangre":" "
}

objetos
{IRUMIN
  "identificacion":"27080307",
  "nombre":"Irumi",
  "apellido":"FrozenHeart",
   "nacimiento":"07-01-1999",
  "direccion":"Ciudad Jardid",
   "sangre":"A+"
}
{Poison
  "identificacion":"27080301",
  "nombre":"Poison",
  "apellido":"Sheets",
   "nacimiento":"01-10-2006",
  "direccion":"Ciudad Jardid",
   "sangre":"B+"
}
{Monica
  "identificacion":"???",
  "nombre":"Monica",
  "apellido":"Strikes",
   "nacimiento":"01-06-2006",
  "direccion":"???",
   "sangre":"???"
}