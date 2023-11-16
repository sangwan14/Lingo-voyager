import OpenAI from 'openai';

const openai = new OpenAI();

export default async (req, res) => {
    if (req.body.prompt !== undefined) {
        const params = {
            messages: [{ role: 'user', content: req.body.prompt }],
            model: 'gpt-4',
        };
        const completion = await openai.chat.completions.create(params);

        res.status(200).json({ text: `${completion.choices[0].message.content}` });
    } else {
        res.status(400).json({ text: "No words selected!" });
    }
}