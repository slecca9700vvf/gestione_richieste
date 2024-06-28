import React, { useEffect } from 'react';
import { CheckAuth, RetrieveUserData } from '../../Authentication/RetrieveAuthUser';
import labels from '../../../API-Labels/labels.json';
import { IUser } from '../../../Interfaces/IUser';
import DashboardGraphs from '../../../Components/Graphs/Dashboard/DashboardGraphs';

function HomePage() {
    const isLogged = CheckAuth();
    const user = RetrieveUserData();

    useEffect(() => {
        // Forza il re-render del layout Flexbox
        const appContent = document.querySelector('.app-content') as HTMLElement;
        if (appContent) {
            appContent.style.display = 'block';
            setTimeout(() => {
                appContent.style.display = 'flex';
            }, 0);
        }
    }, []);

    return (
        <div className="homepage">
            <h2>{labels.home_page.title}</h2>
            <h3>{isLogged ? 'Sei Loggato come: ' + user?.name + " " + user.surname : 'Non sei loggato'}</h3>
            <div className="dashboard-container">
                <DashboardGraphs />
            </div>
        </div>
    );
}

export default HomePage;
