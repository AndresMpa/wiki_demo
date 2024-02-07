### Notas

- La base de datos debería estar creada antes de la instancia de Wiki.js
- La base de datos requiere conexión SSL
- La imagen base viene de [linuxserver/wikijs](https://docs.linuxserver.io/images/docker-wikijs/)
- Las variables `PUID` y `PGID` hay que sacarlas del resultado del comando `ip ${whoami}`
- Esta configuracion asume que el servidor esté en la zona de `TZ` para Bogotá colombia, de igual forma acá una [lista de TZ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

#### Referencias

[Un video de referencia](https://youtu.be/Dd8_plibBYk?feature=shared)
