CREATE PROCEDURE "DBA"."proc_afficherNombreScout"()
result(idPatrouille integer, nomDePatrouille char(255), nbrScoutPatrouille INTEGER )
BEGIN 

select patrId,patrNom,count(scoutId) 
from scouts join patrouilles
    on scouts.patrouille = patrouilles.patrId
GROUP BY patrId,patrNom

END

--

create service "nombreDeScout" type 'JSON' authorization off user "dba" url on methods 'get' as call dba.proc_afficherNombreScout();
