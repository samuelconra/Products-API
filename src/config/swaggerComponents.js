/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del producto.
 *           example: 1
 *         name:
 *           type: string
 *           description: Nombre del producto.
 *           example: 'Laptop XYZ'
 *         description:
 *           type: string
 *           description: Descripción del producto.
 *           example: 'Una laptop potente para desarrolladores.'
 *         price:
 *           type: string
 *           description: Precio del producto.
 *           example: '1500.00'
 *         stock:
 *           type: integer
 *           description: Cantidad en inventario.
 *           example: 50
 *         categoryId:
 *           type: integer
 *           description: ID de la categoría a la que pertenece.
 *           example: 1
 *         brandId:
 *           type: integer
 *           description: ID de la marca a la que pertenece.
 *           example: 1
 *       required:
 *         - name
 *         - description
 *         - price
 *         - stock
 *         - categoryId
 *         - brandId
 *
 *     ProductUpdate:
 *       type: object
 *       description: Campos opcionales para actualizar un producto.
 *       properties:
 *         name:
 *           type: string
 *           example: 'Laptop XYZ v2'
 *         description:
 *           type: string
 *           example: 'Versión actualizada de la laptop.'
 *         price:
 *           type: string
 *           example: '1550.00'
 *         stock:
 *           type: integer
 *           example: 45
 *         categoryId:
 *           type: integer
 *           example: 1
 *         brandId:
 *           type: integer
 *           example: 1
 *
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: 'John Doe'
 *         username:
 *           type: string
 *           example: 'johndoe'
 *         password:
 *           type: string
 *           description: La contraseña (en un caso real, esto no se debería exponer).
 *           example: 'password123'
 *       required:
 *         - name
 *         - username
 *         - password
 *
 *     UserUpdate:
 *       type: object
 *       description: Campos opcionales para actualizar un usuario.
 *       properties:
 *         name:
 *           type: string
 *           example: 'John A. Doe'
 *         username:
 *           type: string
 *           example: 'johndoe88'
 *         password:
 *           type: string
 *           example: 'newPassword456'
 *
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: 'Electrónicos'
 *         description:
 *           type: string
 *           example: 'Dispositivos electrónicos y accesorios.'
 *         active:
 *           type: boolean
 *           example: true
 *       required:
 *         - name
 *         - description
 *         - active
 *
 *     CategoryUpdate:
 *       type: object
 *       description: Campos opcionales para actualizar una categoría.
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         active:
 *           type: boolean
 *
 *     Brand:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: 'Marca ACME'
 *         description:
 *           type: string
 *           example: 'Fabricante de productos de alta calidad.'
 *         active:
 *           type: boolean
 *           example: true
 *       required:
 *         - name
 *         - description
 *         - active
 *
 *     BrandUpdate:
 *       type: object
 *       description: Campos opcionales para actualizar una marca.
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         active:
 *           type: boolean
 *
 *     Error:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: 'fail'
 *         message:
 *           type: string
 *           example: 'Recurso no encontrado'
 *
 *   # ----------------- PARAMETERS (Reutilizables) -----------------
 *   parameters:
 *     idParam:
 *       in: path
 *       name: id
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID numérico del recurso.
 *       example: 1
 *     categoryIdParam:
 *       in: path
 *       name: categoryId
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID numérico de la categoría.
 *       example: 1
 *     brandIdParam:
 *       in: path
 *       name: brandId
 *       schema:
 *         type: integer
 *       required: true
 *       description: ID numérico de la marca.
 *       example: 1
 *
 *   # ----------------- RESPONSES (Reutilizables) -----------------
 *   responses:
 *     SuccessDelete:
 *       description: Recurso eliminado exitosamente.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: 'Recurso eliminado'
 *     NotFound:
 *       description: El recurso solicitado no fue encontrado.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *           example:
 *             status: 'fail'
 *             message: 'Recurso no encontrado'
 *     BadRequest:
 *       description: Datos de entrada inválidos o campos faltantes.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *           example:
 *             status: 'fail'
 *             message: 'Campos faltantes'
 *     Conflict:
 *       description: Conflicto, el recurso está en uso.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *           example:
 *             status: 'fail'
 *             message: 'El recurso está en uso y no puede ser eliminado'
 *
 *   # ----------------- REQUEST BODIES (Reutilizables) -----------------
 *   requestBodies:
 *     ProductBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     ProductUpdateBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     UserBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     UserUpdateBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserUpdate'
 *     CategoryBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     CategoryUpdateBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryUpdate'
 *     BrandBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brand'
 *     BrandUpdateBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BrandUpdate'
 *
 */
