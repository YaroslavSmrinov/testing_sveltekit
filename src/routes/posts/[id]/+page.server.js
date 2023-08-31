export async function load({ params }) {
    async function GetPost() {
        let url = `https://dummyjson.com/products/${params.id}`;
        const res = await fetch(url);
        let data = await res.json();
        return data
    }

    return {
        Post: await GetPost()
    };
}