'use server'

import { revalidatePath } from "next/cache"
 
export async function create(params) {
    try {
        console.log(`/nums/${params.get('num')}`);
        await revalidatePath(`/nums/${params.get('num')}`)

        return { success: true };
    } catch (error) {
        return { success: false };
    }
}