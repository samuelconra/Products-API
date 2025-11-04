/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       '200':
 *         description: A list of all categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       $ref: '#/components/requestBodies/CategoryBody'
 *     responses:
 *       '201':
 *         description: Category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       '400':
 *         description: Missing fields.
 *         $ref: '#/components/responses/BadRequest'
 *
 * /categories/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags: [Categories]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Category found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       '404':
 *         description: Category not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a category partially
 *     tags: [Categories]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     requestBody:
 *       $ref: '#/components/requestBodies/CategoryUpdateBody'
 *     responses:
 *       '200':
 *         description: Category updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       '400':
 *         description: Bad request. Invalid parameters or data type.
 *         $ref: '#/components/responses/BadRequest'
 *       '404':
 *         description: Category not found.
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     parameters:
 *       - $ref: '#/components/parameters/idParam'
 *     responses:
 *       '200':
 *         description: Category deleted.
 *         $ref: '#/components/responses/SuccessDelete'
 *       '404':
 *         description: Category not found.
 *         $ref: '#/components/responses/NotFound'
 *       '409':
 *         description: Category is in use and cannot be deleted.
 *         $ref: '#/components/responses/Conflict'
 */
