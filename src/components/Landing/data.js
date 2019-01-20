import React from 'react';
import charts from './charts';

// https://insights.stackoverflow.com/survey/2018#developer-profile
export default [
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
                                title: 'Porcentaje de participantes por región de la Argentina',
                                component: 'Barh', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true },
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
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['roles_percent'], isPercentual: true, isLogScale: true, cutoff: 10 },
                                description: 'Porcentaje de encuestados por tecnologeia, presentados es escala logarítmica.',
                            },
                        ],
                    },
                    {
                        title: '¿Cuántos contribuyen al Open Source?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['opensource_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
                        ],
                    },
                    {
                        title: '¿Cuántos programan por hobbie?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                description: 'datos porcentuales',
                            },
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
                                props: { ...charts['education_stacked'], isPercentual: false },
                                description: 'datos en volúmen total',
                            },
                        ],
                    },
                    {
                        title: '¿Cuales son las carreras más estudiadas?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Barh',
                                props: { ...charts['careeres_percent'], isPercentual: true, cutoff: 9 },
                                description: 'datos en volúmen total',
                            },
                        ],
                    },
                    {
                        title: '¿Y cuales las Universidades más concurridas?',
                        data: [
                            { // tab
                                title: 'Todas las Universidades',
                                component: 'Barh',
                                props: { ...charts['universities_percent'], isPercentual: true, cutoff: 10 },
                                description: 'datos en volúmen total',
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
                                props: { ...charts['plataformas'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['lenguajes_de_programacion'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['frameworksherramientas_y_librerias'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['bases_de_datos'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['qa_testing'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['ides'], isPercentual: true, cutoff: 10 },
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
                                props: { ...charts['tipo_de_contrato_percent'], isLogScale: true },
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
                                props: { ...charts['recibis_algun_tipo_de_bono'], isLogScale: true },
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