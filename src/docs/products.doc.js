

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: Lista de todos los productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       $ref: '#/components/requestBodies/ProductBody'
 *     responses:
 *       '201':
 *         description: Producto creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '404':
 *         description: Categoría o Marca no encontrada.
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Producto encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Actualizar un producto parcialmente
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       $ref: '#/components/requestBodies/ProductUpdateBody'
 *     responses:
 *       '200':
 *         description: Producto actualizado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         $ref: '#/components/responses/SuccessDelete'
 *       '404':
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/category/{categoryId}:
 *   get:
 *     summary: Obtener productos por ID de categoría
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/categoryIdParam'
 *     responses:
 *       '200':
 *         description: Lista de productos en la categoría.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Categoría no encontrada o sin productos.
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/brand/{brandId}:
 *   get:
 *     summary: Obtener productos por ID de marca
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/brandIdParam'
 *     responses:
 *       '200':
 *         description: Lista de productos de la marca.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Marca no encontrada o sin productos.
 *         $ref: '#/components/responses/NotFound'
 *
 */
