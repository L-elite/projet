----- Tables -----

create table roles (
roleId integer not null default autoincrement,
roleLib char(255) not null,
constraint pk_roles primary key (roleId)
)

--

create table patrouilles (
patrId integer not null default autoincrement,
patrLib char(255) not null,
constraint pk_patrouilles primary key (patrId)
)

--

create table scouts (
scoutId integer not null default autoincrement,
scoutPrenom char(255) not null,
scoutNom char(255) not null,
scoutTotem char(255) null,
scoutPatrouille integer not null,
scoutRole integer not null,
scoutTelephone char(255) null,
scoutMail char(255) null,
scoutDateNaissance date null,
constraint fk_scouts_patrouilles foreign key (scoutPatrouille) references patrouilles(patrId),
constraint fk_scouts_roles foreign key (scoutRole) references roles(roleId),
constraint pk_scouts primary key (scoutId)
)