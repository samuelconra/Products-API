/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of all products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       $ref: '#/components/requestBodies/ProductBody'
 *     responses:
 *       '201':
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '404':
 *         description: Category or Brand not found.
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Product found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a product partially
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       $ref: '#/components/requestBodies/ProductUpdateBody'
 *     responses:
 *       '200':
 *         description: Product updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product or related Category/Brand not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Product deleted.
 *         $ref: '#/components/responses/SuccessDelete'
 *       '404':
 *         description: Product not found.
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/category/{categoryId}:
 *   get:
 *     summary: Get products by category ID
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/categoryIdParam'
 *     responses:
 *       '200':
 *         description: List of products in the category.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Category not found or no products in it.
 *         $ref: '#/components/responses/NotFound'
 *
 * /products/brand/{brandId}:
 *   get:
 *     summary: Get products by brand ID
 *     tags: [Products]
 *     parameters:
 *       - $ref: '#/components/parameters/brandIdParam'
 *     responses:
 *       '200':
 *         description: List of products for the brand.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Brand not found or no products for it.
 *         $ref: '#/components/responses/NotFound'
 */
