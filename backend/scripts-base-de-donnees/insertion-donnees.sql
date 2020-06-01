----- Insertion données -----

insert into scouts
(scoutPrenom, scoutNom, scoutPatrouille, scoutRole, scoutTotem, scoutTelephone, scoutMail, scoutDateNaissance)
values 
('Bastien', 'Sabeau', 2, 1, 'Basindo', '0499/99.99.99', 'basindo@gmail.com', '2003-05-01'),
('Martin', 'Malfroid', 3, 1, 'Coryi', '0499/99.99.99', 'coryi@gmail.com', '2003-05-01'),
('Aléandro', 'Gerardin', 2, 2, 'Manati', '0499/99.99.99', 'manati@gmail.com', '2003-05-01'),
('Alexandre', 'Delory', 1, 2, 'Miriki', '0499/99.99.99', 'miriki@gmail.com', '2003-05-01'),
('Mael', 'Albertuccio', 1, 3, 'Springbok', '0499/99.99.99', 'springbok@gmail.com', '2003-05-01' ),
('Adrien', 'Florins', 1, 3, 'Orignal', '0499/99.99.99', 'orignal@gmail.com', '2003-05-01'),
('Theodore', 'Desmanet', 3, 3, 'Boomslang', '0499/99.99.99', 'boomslang@gmail.com', '2003-05-01'),
('Mathias', 'Alesi', 2, 3, 'Toupaye', '0499/99.99.99', 'toupaye@gmail.com', '2003-05-01'),
('Aubrien', 'Allart',1 ,1, 'Alcyon', '0499/99.99.99', 'alcyon@gmail.com', '2003-05-01'),
('Nathan', 'Bernardi', 2, 3, 'Galago', '0499/99.99.99', 'galago@gmail.com', '2003-05-01'),
('Robin', 'Dery', 2, 3, null, '0499/99.99.99', 'robin@gmail.com', '2003-05-01'),
('Esteban', 'Flaba', 2, 3, 'Ibex', '0499/99.99.99', 'ibex@gmail.com', '2003-05-01'),
('Gabriel', 'Lefevre', 3, 3, null, '0499/99.99.99', 'gabriel@gmail.com', '2003-05-01'),
('Logan', 'Lorent', 2, 3, null, '0499/99.99.99', 'logan@gmail.com', '2003-05-01'),
('Florian', 'Maes', 3, 3, 'Aonyx', '0499/99.99.99', 'aonyx@gmail.com', '2003-05-01'),
('Rénathan', 'Nonnveiler', 3, 2, 'Brolga', '0499/99.99.99', 'brolga@gmail.com', '2003-05-01'),
('Félix', 'Roelands', 1, 3, null, '0499/99.99.99', 'felix@gmail.com', '2003-05-01');

--

insert into roles
(roleLib)
values 
('Chef de patrouille'),
('Second de patrouille'),
('Scout');

--

insert into patrouilles
(patrLib)
values
('Patrouille d''Alcyon'),
('Patrouille de Basindo'),
('Patrouille de Coryi');

--

insert into badges
(badgeLib)
values
('Badge campeur'),
('Badge sportif'),
('Badge naturaliste'),
('Badge artiste'),
('Badge correpondant'),
('Badge troubadour'),
('Badge bricoleur'),
('Badge frère de tous'),
('Badge pilote'),
('Badge intendant');

--

insert into scouts_badges
(scoutId, badgeId)
values
(1, 1),
(1, 2),
(1, 10),
(2, 1),
(2, 2),
(2, 6),
(3, 10),
(3, 6),
(4, 1),
(4, 6),
(5, 2),
(6, 2),
(7, 4);
