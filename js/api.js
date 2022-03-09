import { showAlert } from "./util.js";
import { disabledPage } from "./util.js";

async function fetchFetch() {
    try {
        const response = await fetch(
            "https://23.javascript.pages.academy/keksobooking/data"
        );
        const posts = await response.json();
        return await posts;
    } catch {
        showAlert("Fetch запрос не удался. Попробуйте ещё раз", "red");
        disabledPage();
    }
}

export { fetchFetch };
