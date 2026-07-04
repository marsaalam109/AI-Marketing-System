import fs from "fs";
import { askGemini } from "./gemini.js";

const config = JSON.parse(
    fs.readFileSync("./config.json", "utf8")
);

async function generateKeywords() {

    const prompt = `
You are an SEO Expert.

Generate 50 SEO keywords.

Website:
${config.website.name}

URL:
${config.website.url}

Country:
${config.website.country}

Language:
${config.website.language}

Business:

Airport Transfers
Taxi
Private Driver
Tours
Excursions
Hotels Transfer

Return JSON only.

Example:

[
  {
    "keyword":"marsa alam airport transfer",
    "difficulty":"easy",
    "intent":"commercial"
  }
]
`;

    const result = await askGemini(prompt);

    fs.writeFileSync(
        "./data/keywords.json",
        result
    );

    console.log("Keywords Saved");

}

generateKeywords();
