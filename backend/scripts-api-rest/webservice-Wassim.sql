ALTER PROCEDURE "DBA"."proc_afficherNombreScout"()
result(IDpatrouille INTEGER , nomDePatrouille char(255))
BEGIN 

select DBA.scouts.patrouille, DBA.patrouilles.patrNom
from patrouilles join scouts
        on patrouilles.patrId = scouts.patrouille

END

ALTER PROCEDURE "DBA"."proc_filtrerScout"(id INTEGER )

Result (id integer,nom char(255),prenom char(255),patrouille INTEGER )

BEGIN
    select scoutId,DBA.scouts.scoutNom,DBA.scouts.scoutPrenom,DBA.scouts.patrouille
    from scouts 
    WHERE patrouille=id
END

create service "nombreDeScout" type 'JSON' authorization off user "dba" url on methods 'get' as call dba.proc_afficherNombreScout();

create service "filtrer" type 'JSON' authorization off user "dba" url on methods 'get' as call dba.proc_filtrerScout(:id);
