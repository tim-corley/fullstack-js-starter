# Fullstack JS Boilerplate

This is a skeleton for a fullstack javascript application indended to be run via Docker-Compose.
 - React UI (w/ Webpack)
 - ExpressJS API
 - MongoDB

```
git clone
cd api
npm i
cd ../ui
npm i
```

 - add a `.env` file to project root and add:
```
MONGO_USERNAME=<admin_username>
MONGO_PASSWORD=<admin_password>
MONGO_PORT=27017
MONGO_DB=<database_name>
```

 - add a `.env` file to `api/` dir and add:
```
PORT=3000
```

## To Run Development Severs (at project root):
```
docker-compose up --build
```