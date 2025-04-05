export async function initApp(root: HTMLPreElement) {
    try {
        const res = await fetch('/api/appointments');
        if (!res.ok) {
            throw new Error("Failed to fetch appointments");
        }

        const data = await res.json();

        root.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        root.textContent = `Error: ${error.message}`;
    }
}