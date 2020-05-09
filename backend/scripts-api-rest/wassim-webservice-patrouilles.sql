create procedure proc_listerPatrouilles()
result("Id de patrouille" integer, "Libellé de patrouille" char(255))
begin
	select patrId, patrLib
    from patrouilles
    order by patrId asc
end

--

create service "patrouilles" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerPatrouilles();