# TransMilenio En Línea
Una pagina web que te indica cuanto falta para que el bus llegue a una estacion de transmilenio especifica, aun es un prototipo y no esta conectada a la base de datos de el transmilenio

Mapa interactivo de las estaciones de TransMilenio en Bogotá.

## Funcionalidades
- Visualización de estaciones en el mapa
- Buscador de estaciones en tiempo real
- Información de rutas disponibles por estación
- Tiempo estimado de llegada según hora del día

## Cómo correr el proyecto
1. Clona el repositorio
2. Crea un archivo `.env` con tu API key de Google Maps:
```
   API_KEY=TU_API_KEY_AQUI
```
3. Instala las dependencias:
```
   npm install
```
   Esto descarga automáticamente Express (el servidor) y dotenv (para leer el `.env`) desde el `package.json`. Se crea una carpeta `node_modules` con todo lo necesario.
4. Corre el servidor:
```
   node server.js
```
5. Abre `http://localhost:3000`

## Tecnologías
- HTML, CSS, JavaScript
- Node.js + Express
- Google Maps JavaScript API
