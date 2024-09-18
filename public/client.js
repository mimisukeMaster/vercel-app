const text = document.getElementById("text");

setTimeout(() => {
    post();
}, 3000);
async function post() {
    try {
        const response = await fetch("/api", {
        method: "POST",
        headers: {
        "Content-Type": "text/plain",
    },
    body: "Fetch from client.js",
    });

    text.innerText = await response.text();
    } catch (error) {
        console.error("エラー: ", error);
    }
}