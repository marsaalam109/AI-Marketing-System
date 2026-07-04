import fs from "fs";

const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));

async function generateKeywords() {
    const prompt = `
Generate 30 SEO keywords for:

Website:
${config.website.name}

Website URL:
${config.website.url}

Language:
${config.website.language}

The keywords must target tourists searching for:
- airport transfer
- taxi
- private driver
- Marsa Alam
- excursions
- hotel transfer

Return only JSON.
`;

    console.log(prompt);
}

generateKeywords();
