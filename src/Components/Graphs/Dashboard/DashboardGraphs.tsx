import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Row, Col } from 'react-bootstrap';

// Dati statici per i grafici
const DATA = {
    sectors: {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Richieste per Settore'
        },
        series: [{
            name: 'Richieste',
            data: [
                { name: 'Materiale Informatico', y: 12 },
                { name: 'DPI', y: 19 },
                { name: 'Corsi', y: 3 },
                { name: 'Acquisti', y: 5 },
                { name: 'Materiale Facile Consumo', y: 2 }
            ]
        }]
    },
    requestsPerYear: {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tipologie Richieste per Anno'
        },
        xAxis: {
            categories: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
        },
        yAxis: {
            title: {
                text: 'Numero di Richieste'
            },
            stackLabels: {
                enabled: true
            }
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [
            {
                name: 'Materiale Informatico',
                data: [5, 7, 9, 12, 10, 6, 2, 2, 14, 11, 8, 9]
            },
            {
                name: 'DPI',
                data: [3, 5, 6, 8, 6, 7, 5, 6, 7, 8, 9, 10]
            },
            {
                name: 'Corsi',
                data: [4, 5, 8, 10, 7, 8, 6, 5, 9, 10, 2, 8]
            },
            {
                name: 'Acquisti',
                data: [6, 4, 7, 9, 8, 6, 5, 8, 10, 20, 11, 13]
            },
            {
                name: 'Materiale Facile Consumo',
                data: [2, 3, 5, 6, 5, 6, 4, 5, 6, 7, 5, 6]
            }
        ]
    },
    requestsInProgress: {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Richieste in Lavorazione'
        },
        series: [{
            name: 'Richieste',
            data: [
                { name: 'In Lavorazione', y: 5 },
                { name: 'Completate', y: 24 }
            ]
        }]
    },
    resolutionTime: {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Tempo Medio di Risoluzione delle Richieste'
        },
        xAxis: {
            categories: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
        },
        yAxis: {
            title: {
                text: 'Giorni'
            }
        },
        series: [{
            name: 'Tempo di Risoluzione in giorni',
            data: [4, 2, 3, 1, 2, 2, 4, 5, 3, 2, 2, 3]
        }]
    }
};

const DashboardGraphs = () => {
    return (
        <Container fluid className="dashboard-graphs">
            <Row>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DATA.sectors} />
                </Col>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DATA.requestsPerYear} />
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DATA.requestsInProgress} />
                </Col>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DATA.resolutionTime} />
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardGraphs;
