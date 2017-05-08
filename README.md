### Sequelize commands used
- Install sequelize, pg (sequelize connection with the database) and pg-store (JSON text format)
- Run sequelize init to create default sequelize files

```bash
$ sequelize init
```

- Create Db
```bash
$ createdb dn_name
```

- Create Model
```bash
$ sequelize model:create --name model_name --attributes username:string
```

- Create Seeder
```bash
$ sequelize seed:create --name seed_name
```

- Run migration
```bash
$ sequelize db:migrate
```

- Run seeders
```bash
$ sequelize db:seed:all
```