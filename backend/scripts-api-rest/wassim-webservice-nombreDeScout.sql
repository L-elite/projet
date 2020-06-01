CREATE PROCEDURE "DBA"."proc_afficherNombreScout"()
result(idPatrouille integer, nomDePatrouille char(255), nbrScoutPatrouille INTEGER )
BEGIN 
    select patrId, patrLib, count(scoutId) 
    from scouts
    join patrouilles on scouts.scoutPatrouille = patrouilles.patrId
    GROUP BY patrId, patrLib
END

--

create service "nombreDeScout" type 'JSON' authorization off user "dba" url on methods 'get' as call dba.proc_afficherNombreScout();
