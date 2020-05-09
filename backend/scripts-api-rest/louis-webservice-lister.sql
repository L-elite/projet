create procedure proc_listerScouts()
result(id integer, "Nom" char(255), "Prénom" char(255))
begin
	select scoutId, scoutNom, scoutPrenom
    from scouts
    order by scoutId asc
end

--

create service "lister" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerScouts();