# TrafficVision AI

TrafficVision AI is a React and FastAPI traffic intelligence application for analysing the supplied traffic datasets, forecasting conditions, planning routes, visualising congestion, and producing operational reports.

## Objectives

Provide a clear operational view of traffic conditions, support safer route decisions, and turn historical records into explainable predictions, alerts, and downloadable reports.

## Architecture

The React/Vite frontend consumes FastAPI REST endpoints. Service modules load the supplied CSV datasets, aggregate analytics and alerts, call the persisted ML model, and integrate OSRM/OpenStreetMap routing. PostgreSQL schema files remain available for production persistence.

## Milestone 3 features

- Dataset-driven dashboard with automatic refresh, current traffic cards, alerts, and forecast status.
- Area and road dropdowns loaded from `dataset/traffic_Dataset.csv`.
- Journey-focused ML prediction: area, road, weather, vehicle count, and time, with traffic, delay, risk, recommendation, and confidence.
- OpenStreetMap live traffic markers, route recommendations, congestion heatmap colours, analytics charts, alert centre, and report exports.
- Login and signup roles: Public User, Traffic Operator, and Admin.
- Daily, weekly, and monthly traffic summaries with browser PDF printing and CSV export.

## Folder structure

```
TrafficVision-AI/
├── backend/        FastAPI routers, services, models, configuration
├── frontend/       React/Vite application, pages, components, styles
├── dataset/        traffic_Dataset.csv and processed_traffic_data.csv
├── ml_model/       trained Scikit-Learn artefact and prediction helpers
├── database/       PostgreSQL schema and connection module
├── docker/         container configuration
└── docs/           project documentation
```

## Datasets

- `traffic_Dataset.csv` is the geographic traffic source. It provides dates, areas, roads, traffic volume, average speed, congestion, weather, and incident attributes.
- `processed_traffic_data.csv` is the machine-learning and analytics source. It provides encoded operational features and the traffic-condition target.

The dataset names are part of the application contract and must not be renamed.

## APIs

| Area | Endpoints |
| --- | --- |
| Traffic | `GET /traffic/`, `/traffic/statistics`, `/traffic/areas`, `/traffic/roads?area=`, `/traffic/map`, `/traffic/prediction-options` |
| Intelligence | `GET /analytics`, `/heatmap`, `/alerts`, `/ai/recommendations`; `POST /predict`, `/route/recommend` |
| Reports | `GET /reports?period=daily|weekly|monthly` |
| Authentication | `POST /auth/login`, `POST /auth/signup` |

Interactive API documentation is available at `http://127.0.0.1:8000/docs` once the backend is running.

## Installation and startup

Backend (Python 3.10+):

```bash
cd backend
python -m pip install -r requirements.txt
uvicorn app:app --reload
```

Frontend (Node.js 20+):

```bash
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`). Development accounts are `admin@trafficvision.com / admin123`, `operator@trafficvision.com / operator123`, and `user@trafficvision.com / user123`.

## Machine learning

The prediction API loads `ml_model/traffic_model.pkl`, a Scikit-Learn Random Forest artefact. The UI turns the journey inputs into the model’s feature schema and presents its confidence alongside clear operational advice. Retrain only with the existing preprocessing pipeline in `ml_model/train_model.py`.

## Algorithms and libraries

- Random Forest Classifier with Pandas, NumPy, and Scikit-Learn preprocessing.
- Rule-Based Recommendation Engine for explainable travel advice.
- OSRM/OpenStreetMap routing and Leaflet Maps visualisation.
- Analytics aggregation and Recharts data visualisation.

## Database setup

Create the PostgreSQL database using `database/schema.sql`, then configure connection details in `database/database.py`. The development authentication fallback allows the app to run before a database is configured; production deployments should use hashed credentials and database-backed sessions.

## Screenshots

_Dashboard screenshot placeholder_

_Prediction screenshot placeholder_
_Reports screenshot placeholder_

## Developer information

TrafficVision AI — Full Stack AI/Intelligent Transportation Systems project. Contributions should preserve dataset names, existing routes, and the Milestone 1 and Milestone 2 workflow.

## Future scope

- Persist accounts with hashed passwords and role-based authorization in PostgreSQL.
- Replace area-centre map fallbacks with road-level GPS feeds.
- Add authenticated live sensor ingestion, websocket updates, and managed OSRM infrastructure.
- Add scheduled report delivery and historical model monitoring.
