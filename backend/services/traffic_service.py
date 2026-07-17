import pandas as pd
from pathlib import Path

# Path to dataset
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DATASET_PATH = BASE_DIR / "dataset" / "traffic_dataset.csv"

# Load dataset
try:
    traffic_data = pd.read_csv(DATASET_PATH)
except Exception as e:
    print(f"Error loading dataset: {e}")
    traffic_data = pd.DataFrame()


def get_all_traffic():
    """Return all traffic records"""
    return traffic_data.to_dict(orient="records")


def get_statistics():
    """Return dashboard statistics"""

    if traffic_data.empty:
        return {
            "total_records": 0,
            "average_vehicle_count": 0,
            "average_speed": 0
        }

    return {
        "total_records": len(traffic_data),
        "average_vehicle_count": round(
            traffic_data["Vehicle_Count"].mean(), 2
        ),
        "average_speed": round(
            traffic_data["Traffic_Speed_kmh"].mean(), 2
        )
    }