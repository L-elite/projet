create procedure proc_afficherFicheScout()
result(Id integer, Pr�nom char(255), Nom char(255), "Date de naissance" date, T�l�phone char(255), Email char(255), Totem char(255), R�le char(255), Patrouille char(255))
begin
	select scouts.scoutId, scoutPrenom, scoutNom, dateformat(dateNaissance, 'dd/mm/yyyy'), telephone, mail, totem, roleLib, patrNom
    from scouts
    join roles on scouts.role = roles.roleId
    join patrouilles on scouts.patrouille = patrouilles.patrId
end

--

create service "fiche" type 'json' authorization off user "dba" url on methods 'get' as call proc_afficherFicheScout();