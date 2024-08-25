// api/flipcoin.js
export default async function handler(req, res) {
    const { side, amount } = req.body;
    const randomResult = Math.random() < 0.5 ? "heads" : "tails";

    if (side === randomResult) {
        res.status(200).json({ success: true, message: `You won! You get ${amount * 2} ETH.` });
    } else {
        res.status(200).json({ success: false, message: "You lost! Better luck next time." });
    }
}
