# Next.js | Openjira App

- To run the project locally we need the database

```
docker-compose up -d
```

- -d means **detached**

* MogoDB URL local

```
mongodb://localhost:27017/openjiradb
```

## Configure env vars

Rename **.env.dist** to **.env** and fill the values

# Install needed dependencies and start next in dev mode

```
yarn
yarn dev
```

## Fill Db with dummy data

Call:

```
http://localhost:3000/api/seed
```
