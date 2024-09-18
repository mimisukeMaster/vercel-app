const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    httpPost();
});

async function httpPost() {
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