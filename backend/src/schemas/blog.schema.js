import { z } from 'zod';

const blogSchema = z.object({

    title: z.string({
        invalid_type_error: 'El titulo debe ser un string',
        required_error: 'El titulo es obligatorio'
    }),
    content: z.string({
        invalid_type_error: 'El contenido debe ser un string',
        required_error: 'El contendio es obligatorio'
    }),
    slug: z.string(),
    tags: z.array(z.string()),
    featureImage: z.string({
        invalid_type_error: 'El feature Image debe ser un string'
    }),

});


export async function validateBlog(input) {
    return await blogSchema.safeParseAsync(input)
};