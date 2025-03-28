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

    technologies: z.array(z.string()),

    imageURL: z.string({
        invalid_type_error: 'La Url de la imagen debe ser un string'
    }),

    githubURL: z.string({
        invalid_type_error: 'La Url de la imagen debe ser un string'
    }),

    isFeatured: z.boolean({
        invalid_type_error: 'El featured debe ser booleano'
    })
});

async function validateProject(input) {
    return await projectSchema.safeParseAsync(input)
};

export { validateProject }
