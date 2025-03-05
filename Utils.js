import { redirect } from "react-router-dom";

export async function requireAuth() {
    console.log("balle balle ho gaya mera...");
    return redirect("/login");
}

// const isLoggedIn = false
// if (!isLoggedIn) {
//     console.log(`balle balle`);
//     return redirect("/login")
// }