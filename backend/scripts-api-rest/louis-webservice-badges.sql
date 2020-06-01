create proc_listerBadges(id integer)
result(badgeLib char(255))
begin
    select badgeLib
    from badges
    join scouts_badges on badges.badgeId = scouts_badges.badgeId
    where scoutId = id
end

--

create service "badges" type 'json' authorization off user "dba" url on methods 'get' as call proc_listerBadges(:id);
