----- Procédures / fonctions de base -----

create function getPath()
returns long varchar
deterministic
begin
	declare dbPath long varchar;
	declare dbName long varchar;
    set dbPath = (select db_property('file'));
    set dbName = (select db_property('name')) + '.db';
    set dbPath = left(dbPath, length(dbPath) - length(dbName));
	return dbPath;
end;

--

create procedure http_getPage(in url char(255))
result(html long varchar)
begin
	call sa_set_http_header('Content-Type', 'text/html');
    select xp_read_file(dba.getPath() || url || '.html');
end;

--

create procedure http_getCSS(in url char(255))
result(css long varchar)
begin 
	call sa_set_http_header('Content-Type', 'text/css');
    select xp_read_file(dba.getPath() || 'css\' || url);
end;

--

create procedure http_getJS(in url char(255))
result(js long varchar)
begin 
	call sa_set_http_header('Content-Type', 'text/javascript');
    select xp_read_file(dba.getPath() || 'js\' || url);
end;

--

create procedure http_getIMG(in url char(255))
result(img binary)
begin 
	call sa_set_http_header('Content-Type', 'image/jpg');
    select xp_read_file(dba.getPath() || 'img\' || url);
end;

----- Webservices de base -----

create service "page" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getPage(:url);

--

create service "css" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getCSS(:url);

--

create service "js" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getJS(:url);

--

create service "img" type 'raw' authorization off user "dba" url on methods 'get' as call dba.http_getIMG(:url);