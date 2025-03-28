import { z } from 'zod';

const projectSchema = z.object({
    name: z.string({
        invalid_type_error: 'El nombre debe ser un string',
        required_error: 'El nombre es obligatorio'
    }),

    description: z.string({
        invalid_type_error: 'La descripcion debe ser string',
        required_error: 'La descripcion es requerida'
    }),

    technologies: z.array(z.string())
});

async function validateProject(input) {
    console.log(input);
    console.log(projectSchema.safeParseAsync);
    return await projectSchema.safeParseAsync(input)
};

export { validateProject }
