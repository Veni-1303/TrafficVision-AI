from fastapi import APIRouter
from services.traffic_service import get_all_traffic, get_statistics

router = APIRouter(
    prefix="/traffic",
    tags=["Traffic"]
)

@router.get("/")
def read_all_traffic():
    return get_all_traffic()

@router.get("/statistics")
def traffic_statistics():
    return get_statistics()