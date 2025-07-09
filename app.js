import express from "express";
import fetch from "node-fetch";


const app = express();

app.use(express.json());


// תרגיל 1
app.get("/greet", (req, res) => {
    const timestamp = new Date().toISOString();
    res.json({ msg: `hi from get endpoint ${timestamp}` });
});


// תרגיל 2
app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    console.log(`i got name: ${name}`);
    res.json({ msg: `got name: ${name}` });
});


app.get("/test", async (req, res) => {
    const name = "Bob";
    try {
        const response = await fetch(`http://localhost:3000/greet/${name}`);
        const data = await response.json();

        if (data.msg && data.msg.includes(name)) {
            res.json({ result: "ok" });
        } else {
            res.json({ result: "fail" });
        }
    } catch (error) {
        res.status(500).json({ result: "fail" });
    }
});

// תרגיל 3
const JOKE_API = "https://official-joke-api.appspot.com/random_joke";
const CAT_API = "https://api.thecatapi.com/v1/images/search?limit=11";


app.post("/action", async (req, res) => {
    const { action } = req.body;

    if (!action || (action !== "joke" && action !== "cat fact")) {
        return res.status(400).json({ msg: "body is malformed" });
    }

    try {
        if (action === "joke") {
            const response = await fetch(JOKE_API);
            const data = await response.json();
            const joke = `${data.setup} ${data.punchline}`.toUpperCase();
            return res.json({ joke });
        }

        if (action === "cat fact") {
            const response = await fetch(CAT_API, {
                headers: { "x-api-key": API_KEY },
            });
            const data = await response.json();
            return res.json({ length: `${data.length}` });
        }
    } catch (err) {
        res.status(500).json({ msg: "internal error" });
    }
});


app.listen(3000, () => {
    console.log("server runing... http://localhost:3000");
});
