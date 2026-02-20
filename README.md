# PRODUCT MICROSERVICE

Microservicio de gestión de productos con NestJS y Prisma ORM.

## Características

- ✅ **CRUD completo de productos** - Crear, leer, actualizar y eliminar productos
- ✅ **Paginación** - Listado de productos con parámetros `page` y `limit`
- ✅ **Soft delete** - Los productos se marcan como no disponibles en lugar de eliminarse
- ✅ **Validación de datos** - DTOs con class-validator y class-transformer
- ✅ **Base de datos SQLite** - Con Prisma como ORM
- ✅ **Transformación automática de tipos** - Query params convertidos a números automáticamente

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/products` | Listar productos con paginación |
| GET | `/products/:id` | Obtener producto por ID |
| POST | `/products` | Crear nuevo producto |
| PATCH | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Marcar como no disponible (soft delete) |

## Setup

1. Instalar dependencias: `npm install`
2. Crear archivo `.env` con variables de entorno basado en `env.template` 
3. Ejecutar migraciones: `npx prisma db push`
4. Iniciar: `npm run start:dev`

## Variables de Entorno

```env
PORT=3001
```

## Tecnologías

- **NestJS** - Framework Node.js
- **Prisma** - ORM
- **SQLite** - Base de datos
- **class-validator** - Validación
- **class-transformer** - Transformación de datos