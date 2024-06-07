# 🦷 Sistema de Gestión Odontológica

Este proyecto es un sistema de gestión odontológica desarrollado con NestJS y Firebase. La estructura de la base de datos está normalizada en la tercera forma normal, con las siguientes tablas: `Cita`, `Paciente`, `Doctor` y `Tipo de Cita`.

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **NestJS**
- **Firebase Firestore**
- **Postman (para pruebas de API)**

## 📂 Estructura del Proyecto

carpetaprincipal/
├── dist/
├── node_modules/
├── src/
│ ├── appointments/
│ │ ├── controller/
│ │ │ └── appointments.controller.ts
│ │ ├── dto/
│ │ │ └── create-appointment.dto.ts
│ │ ├── module/
│ │ │ └── appointments.module.ts
│ │ └── service/
│ │ └── appointments.service.ts
│ ├── patients/
│ │ ├── controller/
│ │ │ └── patients.controller.ts
│ │ ├── dto/
│ │ │ └── create-patient.dto.ts
│ │ ├── module/
│ │ │ └── patients.module.ts
│ │ └── service/
│ │ └── patients.service.ts
│ ├── doctors/
│ │ ├── controller/
│ │ │ └── doctors.controller.ts
│ │ ├── dto/
│ │ │ └── create-doctor.dto.ts
│ │ ├── module/
│ │ │ └── doctors.module.ts
│ │ └── service/
│ │ └── doctors.service.ts
│ ├── appointment-types/
│ │ ├── controller/
│ │ │ └── appointment-types.controller.ts
│ │ ├── dto/
│ │ │ └── create-appointment-type.dto.ts
│ │ ├── module/
│ │ │ └── appointment-types.module.ts
│ │ └── service/
│ │ └── appointment-types.service.ts
│ ├── firebase/
│ │ ├── module/
│ │ │ └── firebase.module.ts
│ │ └── service/
│ │ └── firebase.service.ts
│ ├── app.controller.ts
│ ├── app.controller.spec.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ └── main.ts
├── test/
├── .env
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md


## 🛠️ Configuración del Proyecto

### Paso 1: Clonar el Repositorio
### npm install
### Configurar el link de acceso a tu firebase de acuerdo a tu necesidad y ejecutar
📝 Licencia
Este proyecto está licenciado bajo la MIT License.

Desarrollado con ❤️ por Antonio Barrios