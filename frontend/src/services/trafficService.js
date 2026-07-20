const API_URL = "http://127.0.0.1:8000";

export async function getTrafficStatistics() {
    const response = await fetch(`${API_URL}/traffic/statistics`);

    if (!response.ok) {
        throw new Error("Failed to fetch traffic statistics");
    }

    return response.json();
}

export async function getTrafficRecords() {
    const response = await fetch(`${API_URL}/traffic/`);

    if (!response.ok) {
        throw new Error("Failed to fetch traffic records");
    }

    return response.json();
}