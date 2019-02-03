import React from 'react';
import charts from './charts';

const historic_charts = JSON.parse(
    '{"historic_salary_medians": {"data": [{"name": "0", "publish_date": "2015-01-01", "salary": 14000.0, "us_salary": 1633.6132257326756}, {"name": "1", "publish_date": "2015-09-01", "salary": 16000.0, "us_salary": 1719.588803327404}, {"name": "2", "publish_date": "2016-02-01", "salary": 15060.240963855424, "us_salary": 1060.2630173261823}, {"name": "3", "publish_date": "2016-08-01", "salary": 20000.0, "us_salary": 1347.1937112997557}, {"name": "4", "publish_date": "2017-02-01", "salary": 24000.0, "us_salary": 1524.7074070603483}, {"name": "5", "publish_date": "2017-09-01", "salary": 31325.30120481928, "us_salary": 1823.7577726451937}, {"name": "6", "publish_date": "2018-03-01", "salary": 33734.93975903615, "us_salary": 1678.9482732226884}, {"name": "7", "publish_date": "2018-09-04", "salary": 41000.0, "us_salary": 1134.7290038809115}, {"name": "8", "publish_date": "2018-12-14", "salary": 48500.0, "us_salary": 1284.262444988552}]}, "historic_gender_percent": {"data": [{"name": "(Timestamp(\'2016-02-01 00:00:00\'), \'Hombre\')", "count": 0.942024492326771}, {"name": "(Timestamp(\'2016-02-01 00:00:00\'), \'Mujer\')", "count": 0.057975507673228954}, {"name": "(Timestamp(\'2016-08-01 00:00:00\'), \'Hombre\')", "count": 0.9228052472250252}, {"name": "(Timestamp(\'2016-08-01 00:00:00\'), \'Mujer\')", "count": 0.07719475277497477}, {"name": "(Timestamp(\'2017-02-01 00:00:00\'), \'Hombre\')", "count": 0.9073646394662561}, {"name": "(Timestamp(\'2017-02-01 00:00:00\'), \'Mujer\')", "count": 0.09263536053374391}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Hombre\')", "count": 0.8911970382558618}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Mujer\')", "count": 0.10448375154257507}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Otros\')", "count": 0.0043192102015631425}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Hombre\')", "count": 0.8535061328396205}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Mujer\')", "count": 0.14325387641749596}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Otros\')", "count": 0.0032399907428835918}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Hombre\')", "count": 0.8622691292875989}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Mujer\')", "count": 0.1345646437994723}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Otros\')", "count": 0.0031662269129287598}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Hombre\')", "count": 0.864739471805853}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Mujer\')", "count": 0.12955032119914348}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Otros\')", "count": 0.005710206995003569}]}, "historic_gender_salary_median": {"data": [{"name": "(Timestamp(\'2016-02-01 00:00:00\'), \'Hombre\')", "salary": 15060.240963855424}, {"name": "(Timestamp(\'2016-02-01 00:00:00\'), \'Mujer\')", "salary": 14042.168674698796}, {"name": "(Timestamp(\'2016-08-01 00:00:00\'), \'Hombre\')", "salary": 20000.0}, {"name": "(Timestamp(\'2016-08-01 00:00:00\'), \'Mujer\')", "salary": 18072.289156626506}, {"name": "(Timestamp(\'2017-02-01 00:00:00\'), \'Hombre\')", "salary": 24096.38554216868}, {"name": "(Timestamp(\'2017-02-01 00:00:00\'), \'Mujer\')", "salary": 20481.927710843374}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Hombre\')", "salary": 32000.0}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Mujer\')", "salary": 28039.75903614458}, {"name": "(Timestamp(\'2017-09-01 00:00:00\'), \'Otros\')", "salary": 31325.30120481928}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Hombre\')", "salary": 35000.0}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Mujer\')", "salary": 27710.84337349398}, {"name": "(Timestamp(\'2018-03-01 00:00:00\'), \'Otros\')", "salary": 26605.421686746988}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Hombre\')", "salary": 42168.674698795185}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Mujer\')", "salary": 33800.0}, {"name": "(Timestamp(\'2018-09-04 00:00:00\'), \'Otros\')", "salary": 34337.34939759036}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Hombre\')", "salary": 50000.0}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Mujer\')", "salary": 41000.0}, {"name": "(Timestamp(\'2018-12-14 00:00:00\'), \'Otros\')", "salary": 46500.0}]}}'
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
                                title: 'Mediana salarial',
                                component: 'Barh',
                                props: { ...charts['opensource_salary_median'], isPercentual: false },
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
                                title: 'Mediana salarial',
                                component: 'Barh',
                                props: { ...charts['hobbie_salary_median'], isPercentual: false },
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
                        title: 'Medianana salarial en Argentina',
                        data: [
                            {  // tab
                                title: 'Salarios en AR$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['salary'] },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
                            },
                            {  // tab
                                title: 'Salarios en US$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['us_salary'] },
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
                                title: 'Mediana salarial',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_median'], isPercentual: false, isLogScale: false },
                                description: 'Mediana salarial en [AR$] por región del país.',
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
                                    data: charts['roles_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
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
                                    data: charts['carrera_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: 'Por estado de la carrera',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_estado_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: 'Por nivel de estudios alcanzado',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['nivel_estudios_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
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
                                    data: charts['plataformas_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
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
                                    data: charts['lenguajes_de_programacion_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
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
                                title: 'Mujeres / Otros',
                                component: 'Area', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_percent'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ],
                                                    [ row.name.match(/'(\w+)'\)$/)[1] ]: row.count,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Mujer', 'Otros'],
                                    isPercentual: true,
                                },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
                            },
                            {  // tab
                                title: 'Todos',
                                component: 'Area', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_percent'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ],
                                                    [ row.name.match(/'(\w+)'\)$/)[1] ]: row.count,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Mujer', 'Otros', 'Hombre'],
                                    isPercentual: true,
                                },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Salarios',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[ row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] ],
                                                    [ row.name.match(/'(\w+)'\)$/)[1] ]: row.salary,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Hombre', 'Mujer', 'Otros'],
                                },
                                description: 'Serie histórica de salarios basada en encuestas anteriores.',
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
                                    datos porcentuales, por clase según indicador&nbsp;<a target='_blank' href='https://es.wikipedia.org/wiki/Net_Promoter_Score' rel="noopener noreferrer">Net Promoter Score</a>
                                </span>),
                            },
                        ],
                    },
                ],
            },
        ],
    },
];