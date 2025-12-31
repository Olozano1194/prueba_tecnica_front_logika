# Bekind Admin Dashboard – Frontend

Este proyecto corresponde a una prueba técnica frontend para la gestión de acciones (categorías) en un panel administrativo, consumiendo una API externa.

El enfoque principal fue la implementación de autenticación, consumo de endpoints protegidos y la creación de una acción mediante formulario.

---

## Tecnologías utilizadas

- **React + TypeScript**
- **Vite**
- **React Router DOM**
- **Axios**
- **React Hook Form**
- **Tailwind CSS**
- **React Hot Toast** – Feedback visual (éxito / error)

## Instalación y ejecución del proyecto

### Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd nombre-del-proyecto
```

### Instalar dependencias

````bash
    npm run dev
```

## Autenticación

La aplicación implementa autenticación basada en **JWT**:

- El login se realiza contra el endpoint: POST /Authentication/Login
- El token recibido se almacena en `localStorage`
- Las peticiones protegidas utilizan un `axiosPrivate` con interceptor para enviar el token en el header:

```http
Authorization: Bearer {token}
````

## Listado de Acciones

- Las rutas protegidas se manejan con un ProtectedRoute

- Se consume el endpoint: GET /api/v1/actions/admin-list
- Los datos se muestran en el dashboard al iniciar sesión correctamente
- El listado se refresca automáticamente después de crear una acción

## Crear Acción (Formulario)

- Endpoint utilizado: POST /api/v1/actions/admin-add

**Campos implementados**

Se seleccionaron los siguientes campos basados en la respuesta del endpoint de listado:

- name (string)
- description (string)
- color (string - HEX)
- status (number)

Estos campos fueron seleccionados basándose en:

- La respuesta del endpoint de listado
- El diseño entregado en Figma

**Validaciones**

- Campos obligatorios
- Longitud mínima en nombre y descripción
- Feedback visual de error y éxito usando react-hot-toast

**Errores que ocurrieron al querer crear datos**

- El API no documenta el payload exacto para la creación de acciones.
  A partir de pruebas con Insomnia y la respuesta del listado, se infirió que el endpoint requiere obligatoriamente el campo icon.

- Flujo al crear una acción
- El usuario completa el formulario
- Se validan los datos
- Se envía la información al API
- En caso de éxito:
- Se muestra un mensaje de confirmación
- Se redirige al dashboard
- Se refresca el listado

## Notas finales

- El proyecto prioriza claridad y buenas prácticas básicas
- La estructura está pensada para facilitar mantenimiento
- Algunas decisiones se tomaron en base a prueba y error debido a la falta de documentación del API

## Gracias por la oportunidad
