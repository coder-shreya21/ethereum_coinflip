// public/script.js
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.ethereum) {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('connectWallet').innerText = "Wallet Connected";
        } catch (error) {
            console.error("User rejected connection", error);
        }
    } else {
        alert("MetaMask is required to use this feature.");
    }
});

const flipCoin = async (side) => {
    const amount = document.getElementById('amount').value;
    if (!amount) {
        alert("Please enter an amount to bet.");
        return;
    }

    try {
        const response = await fetch(`/api/flipcoin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ side, amount })
        });
        const result = await response.json();
        document.getElementById('result').innerText = result.message;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById('result').innerText = "Transaction failed.";
    }
};

document.getElementById('heads').addEventListener('click', () => flipCoin("heads"));
document.getElementById('tails').addEventListener('click', () => flipCoin("tails"));
