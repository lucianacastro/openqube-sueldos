import React from 'react';
import charts from './charts';

const historic_charts = JSON.parse(
    '{"historic_salary_means": {"data": [{"name": "0", "publish_date": "2015-01-01", "salary": 15657.327692307692, "us_salary": 1831.0094129838753}, {"name": "1", "publish_date": "2015-09-01", "salary": 18354.930953367875, "us_salary": 1982.559347753113}, {"name": "2", "publish_date": "2016-02-01", "salary": 18038.123880968713, "us_salary": 1315.547086822658}, {"name": "3", "publish_date": "2016-08-01", "salary": 22654.065336804586, "us_salary": 1519.3771562098698}, {"name": "4", "publish_date": "2017-02-01", "salary": 26258.34959043176, "us_salary": 1650.4305210830648}, {"name": "5", "publish_date": "2017-09-01", "salary": 35187.43930996702, "us_salary": 2038.4335134959522}, {"name": "6", "publish_date": "2018-03-01", "salary": 38631.863063591714, "us_salary": 1954.1933998488341}, {"name": "7", "publish_date": "2018-09-04", "salary": 46313.559180631026, "us_salary": 1499.5437664320675}, {"name": "8", "publish_date": "2018-12-14", "salary": 55797.48322140491, "us_salary": 1478.137759683293}]}}'
);

// https://insights.stackoverflow.com/survey/2018#developer-profile
export default [
    { // category
        title: 'Introducción',
        data: [
            { // sub-category
                title: 'Metodología',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Perfil de los Encuestados',
        data: [
            { // sub-category
                title: 'Regiones',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por región de la Argentina',
                        data: [
                            {  // tab
                                title: 'Geografía',
                                component: 'MapArgentina', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true },
                                description: 'Vista rápida del nivel de participación en la encuesta por regiones del país.',
                            },
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001 },
                                description: 'Porcentaje de participantes de la encuesta por región del país, en escala logarítmica.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Roles',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por tipo de rol',
                        data: [
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['roles_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'Porcentaje de encuestados por rol, presentados es escala logarítmica.',
                            },
                        ],
                    },
                    {
                        title: '¿Cuántos contribuyen al Open Source?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['opensource_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },/*
                            { // tab
                                title: 'Media salarial',
                                component: 'Barh',
                                props: { ...charts['opensource_salary_mean'], isPercentual: false },
                                description: 'Meddia salarial en [AR$]',
                            },*/
                        ],
                    },
                    {
                        title: '¿Cuántos programan por hobbie?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },/*
                            { // tab
                                title: 'Media salarial',
                                component: 'Barh',
                                props: { ...charts['hobbie_salary_mean'], isPercentual: false },
                                description: 'Meddia salarial en [AR$]',
                            },*/
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Años de experiencia',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_percent'], isPercentual: true },
                                description: 'Porcentaje de encuestados por años de experiencia en su profesión',
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en la compañía actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_company'], isPercentual: true },
                                description: 'Porcentaje de encuestados por años de antigüedad en su compañía actual',
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en el puesto actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_position'], isPercentual: true },
                                description: 'Porcentaje de encuestados por años de antigüedad en su puesto actual',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Educación',
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzado y estado acutual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['education_stacked'], isPercentual: true, isStacked: true },
                                description: 'datos en volúmen total',
                            },
                        ],
                    },
                    {
                        title: '¿Cuales son las carreras más estudiadas?',
                        data: [
                            { // tab
                                title: 'Carreras',
                                component: 'Barh',
                                props: { ...charts['careeres_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 9 },
                                description: 'datos porcentuales',
                            },
                            { // tab
                                title: 'Carreras y estado',
                                component: 'Barh',
                                props: { ...charts['careeres_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 9, isStacked: false },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {
                        title: '¿Y cuales las Universidades más concurridas?',
                        data: [
                            { // tab
                                title: 'Universidades',
                                component: 'Barh',
                                props: { ...charts['universities_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                            { // tab
                                title: 'Universidades y estado de las carreras',
                                component: 'Barh',
                                props: { ...charts['universities_stacked_percent'], isPercentual: true, isLogScale: false, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {
                        title: '¿Cuántos realizaron cursos de especialización?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['specialization_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {
                        title: '¿Quiénes pagan por cursos de especialización?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['specialization_pays_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Demografía',
                data: [
                    {  // section
                        title: 'Identidad de género',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Orientación sexual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_sexual_orientation_percent'], isPercentual: true, cutoff: 3 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Salarios',
        data: [
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Media salarial en Argentina',
                        data: [
                            {  // tab
                                title: 'Salarios en AR$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_means'], xDataKey: 'publish_date', yDataKeys: ['salary'] },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
                            },
                            {  // tab
                                title: 'Salarios en US$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_means'], xDataKey: 'publish_date', yDataKeys: ['us_salary'] },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Región',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Media salarial',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_mean'], isPercentual: false, isLogScale: false },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Puesto',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_mean'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Carrera',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_seniority_salary_mean'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: 'Por estado de la carrera',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_estado_salary_mean'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    cutoff: 15,
                                },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Tecnología',
                data: [
                    {  // section
                        title: 'Plataformas',
                        data: [
                            {  // tab
                                title: 'Por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['plataformas_seniority_salary_mean'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: 'Por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['lenguajes_de_programacion_seniority_salary_mean'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Media salarial en [AR$] por región del país.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Género',
        data: [
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Nivel de participación',
                        data: [
                            {  // tab
                                title: '',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Preparación',
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzados y completitud',
                        data: [
                            {  // tab
                                title: 'Hombres',
                            },
                            {  // tab
                                title: 'Mujeres',
                            },
                            {  // tab
                                title: 'No Binarios',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Salarios',
                data: [
                    {  // section
                        title: 'Juniors',
                        data: [
                            {  // tab
                                title: 'Hombres',
                            },
                            {  // tab
                                title: 'Mujeres',
                            },
                            {  // tab
                                title: 'No Binarios',
                            },
                        ],
                    },
                    {  // section
                        title: 'Semi-Seniors',
                        data: [
                            {  // tab
                                title: 'Hombres',
                            },
                            {  // tab
                                title: 'Mujeres',
                            },
                            {  // tab
                                title: 'No Binarios',
                            },
                        ],
                    },
                    {  // section
                        title: 'Semi-Seniors',
                        data: [
                            {  // tab
                                title: 'Hombres',
                            },
                            {  // tab
                                title: 'Mujeres',
                            },
                            {  // tab
                                title: 'No Binarios',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Tecnología',
        data: [
            { // sub-category
                title: 'Tecnologías más populares',
                data: [
                    {  // section
                        title: 'Plataformas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['plataformas'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['lenguajes_de_programacion'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Frameworks, Herramientas y Librerías',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['frameworksherramientas_y_librerias'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Bases de Datos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['bases_de_datos'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'QA / Testing',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['qa_testing'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'IDEs',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['ides'], isPercentual: true, minLogScale: 0.001, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Trabajo',
        data: [
            { // sub-category
                title: 'Tipos de contrato',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['tipo_de_contrato_percent'], isLogScale: true, isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Compensación',
                data: [
                    {  // section
                        title: 'Tipos de Bonos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['recibis_algun_tipo_de_bono'], isLogScale: true, isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Beneficios Extra',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['beneficios_extra'], isPercentual: true, cutoff: 10 },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Porcentajes de Ajuste por Inflación a la fecha (2018)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['de_que_fue_el_ajuste'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Características de las Empresas',
                data: [
                    {  // section
                        title: 'Cantidad de Empleados',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['cantidad_de_empleados'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: 'Actividad Principal de la Empresa',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: { ...charts['actividad_principal'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cuántos recomendarían su lugar de Trabajo a otros?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['la_recomendas_como_un_buen_lugar_para_trabajar'], isPercentual: true },
                                description: (<span>
                                    datos porcentuales, por clase según indicador&nbsp;<a target='_blank' href='https://es.wikipedia.org/wiki/Net_Promoter_Score'>Net Promoter Score</a>
                                </span>),
                            },
                        ],
                    },
                ],
            },
        ],
    },
];