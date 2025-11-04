/**
 * @swagger
 * /brands:
 *   get:
 *     summary: Get all brands
 *     tags: [Brands]
 *     responses:
 *       '200':
 *         description: A list of all brands.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brand'
 *
 *   post:
 *     summary: Create a new brand
 *     tags: [Brands]
 *     requestBody:
 *       $ref: '#/components/requestBodies/BrandBody'
 *     responses:
 *       '201':
 *         description: Brand created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       '400':
 *         description: Missing fields.
 *         $ref: '#/components/responses/BadRequest'
 *
 * /brands/{id}:
 *   get:
 *     summary: Get brand by ID
 *     tags: [Brands]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Brand found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       '404':
 *         description: Brand not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a brand partially
 *     tags: [Brands]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       $ref: '#/components/requestBodies/BrandUpdateBody'
 *     responses:
 *       '200':
 *         description: Brand updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brand'
 *       '400':
 *         description: Bad request. Invalid parameters or data type.
 *         $ref: '#/components/responses/BadRequest'
 *       '404':
 *         description: Brand not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a brand
 *     tags: [Brands]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Brand deleted.
 *         $ref: '#/components/responses/SuccessDelete'
 *       '404':
 *         description: Brand not found.
 *         $ref: '#/components/responses/NotFound'
 *       '409':
 *         description: Brand is in use and cannot be deleted.
 *         $ref: '#/components/responses/Conflict'
 *
 */
