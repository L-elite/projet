create procedure proc_listerScoutsBadges()
result(badgeId integer, badgeLib char(255), nombreScouts integer)
begin
	select badges.badgeId, badgeLib, count(scoutId)
    from badges
    join scouts_badges on badges.badgeId = scouts_badges.badgeId
    group by badges.badgeId, badgeLib
end

--

create service "scoutsbadges" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerScoutsBadges();