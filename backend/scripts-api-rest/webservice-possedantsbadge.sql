create procedure proc_listerPossedantsBadge(badgid integer)
result(prenom char(255), nom char(255))
begin
	select scoutPrenom, scoutNom
    from scouts
    join scouts_badges on scouts.scoutId = scouts_badges.scoutId
    where scouts_badges.badgeId = badgid
    order by scouts.scoutId asc
end

--

create service "possedantsbadge" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerPossedantsBadges(:badgid);