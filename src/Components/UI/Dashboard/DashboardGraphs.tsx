import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Row, Col } from 'react-bootstrap';
import { DataGraph } from './IDashboardGraph';

const DashboardGraphs = () => {
    return (
        <Container fluid className="dashboard-graphs">
            <Row>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DataGraph.sectors} />
                </Col>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DataGraph.requestsPerYear} />
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DataGraph.requestsInProgress} />
                </Col>
                <Col md={6} sm={12}>
                    <HighchartsReact highcharts={Highcharts} options={DataGraph.resolutionTime} />
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardGraphs;