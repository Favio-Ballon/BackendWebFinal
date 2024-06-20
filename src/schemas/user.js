import z from 'zod';

const userSquema = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(60)
});

export function validateUser(user) {
    return userSquema.safeParse(user);
}

export function validatePartialUser(user) {
    return userSquema.partial().safeParse(user);
}