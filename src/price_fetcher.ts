export async function fetchProductPrice(id: string): Promise<{ title: string; price: number } | null> {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        if (!response.ok) return null;
        return await response.json();
    } catch {
        return null;
    }
}