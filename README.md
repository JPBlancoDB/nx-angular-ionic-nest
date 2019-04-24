# POC Monorepo with Nx + Angular + Ionic + NestJs

## Development server

- For dev server (web + backend) run

```bash
ng serve web & ng serve backend
```

Navigate to `http://localhost:4200/` for the frontend. The app will automatically reload if you change any of the source files. Backend endpoint is `http://localhost:5000/api` (the proxy is already configured).

- For mobile run

```bash
ng run ionic & ng serve backend
```

## Migrations

For running the migrations you need [Liquibase](https://www.liquibase.org). The migrations project was generated using [liquibase-cli](https://github.com/JPBlancoDB/liquibase-cli).
