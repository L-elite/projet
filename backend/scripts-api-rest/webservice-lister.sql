create procedure proc_listerScouts()
result(id integer, nom char(255), prenom char(255))
begin
	select scouts.scoutId, scoutNom, scoutPrenom
    from scouts
end

--

create service "lister" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerScouts();