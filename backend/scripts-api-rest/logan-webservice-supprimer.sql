create procedure proc_supprimerScout(id integer)
begin 
    delete
    from scouts
    where scoutId = id 
end

--

create service "supprimer" type 'json' authorization off user "dba" url on methods 'get' as call proc_supprimerScout(:id);