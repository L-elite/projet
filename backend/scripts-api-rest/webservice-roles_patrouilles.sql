create procedure proc_listerRoles()
result("Id de r�le" integer, "Libell� de r�le" char(255))
begin
	select roleId, roleLib 
    from roles
    order by roleId asc
end

--

create procedure proc_listerPatrouilles()
result("Id de patrouille" integer, "Libell� de patrouille" char(255))
begin
	select patrId, patrLib 
    from patrouilles
    order by patrId asc
end

--

create service "roles" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerRoles();

--

create service "patrouilles" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerPatrouilles();