'use server'

import { redirect } from "next/navigation"

export async function navigateHome() {
    redirect('/home');
}