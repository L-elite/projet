create procedure proc_inscrireScout(nom char(255), prenom char(255), dateNaissance date, telephone char(255), mail char(255), totem char(255), role char(255), patrouille char(255))
BEGIN
	insert into scouts
    (scoutPrenom, scoutNom, scoutPatrouille, scoutRole, scoutTotem, scoutTelephone, scoutMail, scoutDateNaissance)
    values 
    (prenom, nom, patrouille, role, totem, telephone, mail, dateNaissance)
END

--

create service "inscrire" type 'json' authorization off user "dba" url on methods 'get' as call proc_inscrireScout(:nom, :prenom, :dateNaissance, :telephone, :mail, :totem, :role, :patrouille);