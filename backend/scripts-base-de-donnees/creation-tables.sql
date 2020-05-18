----- Tables -----

create table roles (
roleId integer not null default autoincrement,
roleLib char(255) not null,
constraint pk_roles primary key (roleId)
)

--

create table patrouilles (
patrId integer not null default autoincrement,
patrNom char(255) not null,
constraint pk_patrouilles primary key (patrId)
)

--

create table scouts (
scoutId integer not null default autoincrement,
scoutPrenom char(255) not null,
scoutNom char(255) not null,
totem char(255) null,
patrouille integer not null,
role integer not null,
telephone char(255) null,
mail char(255) null,
dateNaissance date null,
constraint fk_scouts_patrouilles foreign key (patrouille) references patrouilles(patrId),
constraint fk_scouts_roles foreign key (role) references roles(roleId),
constraint pk_scouts primary key (scoutId)
)

--

create table badges (
badgeId integer not null default autoincrement,
badgeLib char(255) not null,
constraint pk_badges primary key (badgeId)
)

--

create table scouts_badges (
scoutId integer,
badgeId integer,
constraint fk_scouts_badges_scouts foreign key (scoutId) references scouts(scoutId),
constraint fk_scouts_badges_badges foreign key (badgeId) references badges(badgeId),
constraint pk_scouts_badges primary key (scoutId, badgeId)
)
