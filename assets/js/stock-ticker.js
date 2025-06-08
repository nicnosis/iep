import config from '../../config.js';

// Stock Ticker Configuration
const STOCK_SYMBOL = 'CLNE';
const UPDATE_INTERVAL = 60000; // 60 seconds

class StockTicker {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.init();
    }

    init() {
        this.createTickerUI();
        this.fetchStockData();
        setInterval(() => this.fetchStockData(), UPDATE_INTERVAL);
    }

    createTickerUI() {
        this.container.innerHTML = `
            <div class="stock-ticker">
                <div class="ticker-symbol">Target Acquisition</div>
                <div class="ticker-price">--</div>
                <div class="ticker-change">--</div>
            </div>
        `;
    }

    async fetchStockData() {
        try {
            const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${STOCK_SYMBOL}&token=${config.API_KEY}`);
            const data = await response.json();
            this.updateUI(data);
        } catch (error) {
            console.error('Error fetching stock data:', error);
        }
    }

    updateUI(data) {
        const priceElement = this.container.querySelector('.ticker-price');
        const changeElement = this.container.querySelector('.ticker-change');
        
        const price = data.c.toFixed(2);
        const change = data.d.toFixed(2);
        const changePercent = data.dp.toFixed(2);
        
        priceElement.textContent = `$${price}`;
        changeElement.textContent = `${change >= 0 ? '+' : ''}${change} (${changePercent}%)`;
        
        // Update colors based on price change
        changeElement.className = 'ticker-change ' + (change >= 0 ? 'positive' : 'negative');
    }
}

// Initialize the ticker when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    new StockTicker('stock-ticker-container');
}); 