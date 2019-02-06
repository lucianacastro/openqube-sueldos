import React from 'react';
import charts from './charts';
import historic_charts from './historic-charts';

// https://insights.stackoverflow.com/survey/2018#developer-profile
export default [
    { // category
        title: 'Introducción',
        content: (
            <div>
                <p>
                    Desde 2014 SysArmy lleva a cabo las Encuestas de Sueldos en la región, abarcando a Argentina y el resto de Latinoamérica.
                    Ya desde 2016 nuestras encuestas se relevan de forma semestral, y los resultados son publicados en formato CSV a través de el <a href="https://sysarmy.com.ar/blog/" target="_blank">blog de SysArmy</a>.
                </p>
                <p>
                    En esta oportunidad, desde OpenQube tenemos el agrado de acercar a la comunidad nuestro primer reporte para la Argentina con los resultados de la última encuesta.
                </p>
                <p>
                    Con la intención de ofrecer a nuestra comunidad los resultados de una manera más accesible, nos tomamos la libertad de seleccionar algunos datos estadísticos que consideramos, son de relevancia.
                    Para tener una mayor comprensión sobre estos resultados, recomendamos leer el apartado de <a href="#Metodologia">metodología</a>.
                </p>
            </div>
        )
    },
    { // category
        title: 'Perfil de los Encuestados',
        content: (
            <div>
                <center>
                <p><strong>{charts['total_surveyed']}</strong> fueron los encuestados en total en la República Argentina.</p>
                <p><strong>{charts['total_analyzed_surveyed']}</strong> respuestas fueron consideradas en el presente anális, es decir un <strong>{parseInt(charts['total_analyzed_surveyed']/charts['total_surveyed']*10000)/100}%</strong> del total.</p>
                </center>
            </div>
        ),
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
                                caption: 'Mapa de participación en la encuesta por regiones del país.',
                                description: 'La intensidad del color es solo representativa.',
                            },
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001 },
                                caption: 'Porcentaje de participantes de la encuesta por región del país, en escala logarítmica.',
                                description: <p>La <a href="#Metodologia">escala logarítmica</a> permite resaltar las diferencias entre provincias, incluso cuando esta sea muy amplia.  Nótese que las líneas verticales de la cuadrícula no son equidistantes, tampoco los valores de la escala son secuenciales.</p>,
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
                                caption: <p>Porcentaje de encuestados por rol, presentados en <a href="#Metodologia">escala logarítmica</a>.</p>,
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
                                caption: <p>Quienes <strong>No</strong> contribuyen al Open Source, y quienes <strong>Sí</strong> lo hacen.</p>,
                                description: <p>¿Alguien mencionó al <a target="_blank" href="https://es.wikipedia.org/wiki/Principio_de_Pareto">Principio de Pareto</a>?</p>
                            },
                        ],
                    },
                    {
                        title: '¿Cuántos programan por hobbie?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                caption: <p>Quienes <strong>No</strong> programan por hobbie, y quienes <strong>Sí</strong> lo hacen.</p>,
                                description: <p>Empate.</p>
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
                                caption: 'Porcentaje de encuestados por años de experiencia en la profesión.',
                                description: <p>Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.</p>
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
                                caption: 'Porcentaje de encuestados por años de antigüedad en su compañía actual.',
                                description: <p>Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.</p>
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
                                caption: 'Porcentaje de encuestados por años de antigüedad en su puesto actual.',
                                description: <p>Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.</p>
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
                                caption: 'Este gráfico nos permite ver para nuestra población, qué porcentaje de encuestados alcanzó cada nivel de estudios.  A su vez, por cada uno, podemos apreciar el grado de completitud o estado de sus carreras.',
                                description: 'Con el objetivo de no distorsionar en análisis, aquí se utiliza la escala de representación lineal.'
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las carreras más estudiadas?',
                        data: [
                            { // tab
                                title: 'Carreras',
                                component: 'Barh',
                                props: { ...charts['careeres_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 9 },
                                caption: '',
                                description: (<div>
                                    <p>
                                        Los nombres de las carreras fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">metodología</a>.<br />
                                        En algunos casos no fue posible determinar las entradas con exactitud: por ejemplo, si "Sistemas" a secas se refiere a Licenciatura, Ingeniería, Analista o Tecnicatura.
                                        Para estos casos solamente se normalizan, sin reagrupar.
                                    </p>
                                </div>),
                            },
                            { // tab
                                title: 'Carreras y estado',
                                component: 'Barh',
                                props: { ...charts['careeres_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 9, isStacked: false },
                                caption: 'datos porcentuales',
                                caption: <p>Aquí podemos ver de manera comparativa y en escala logarítmica,<br /> por cada carrera, cuál es el estado para la muestra.</p>,
                                description: (<div>
                                    <p>
                                        Este gráfico podría ayudarnos a entender qué carreras suelen "completarse más que otras",<br /> o también ver el nivel de deserción en cada una, a grandes rasgos e independientemente de la casa de estudios.
                                    </p>
                                </div>),
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las Universidades más concurridas?',
                        data: [
                            { // tab
                                title: 'Universidades',
                                component: 'Barh',
                                props: { ...charts['universities_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10 },
                                caption: <p>Los nombres de las casas de estudio fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">metodología</a>.</p>,
                                description: '',
                            },
                            { // tab
                                title: 'Universidades y estado de las carreras',
                                component: 'Barh',
                                props: { ...charts['universities_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 10 },
                                caption: <p>Aquí se puede apreciar de manera comparativa y en escala logarítmica,<br /> por cada casa de estudio, cuál es el estado de sus carreras para la muestra.</p>,
                                description: (<div>
                                    <p>
                                        Este gráfico podría darnos una idea del nivel de deserción en cada casa de estudio, a grandes rasgos.
                                        Es importante aclarar que para muchas universidades, en especial cuanto más abajo estén listadas, la cantidad de muestras puede ser muy baja y no ser representativa de la realidad de dichas casas de estudio.
                                    </p>
                                </div>),
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
                                caption: <p>Quienes <strong>Sí</strong> realizaron cursos de especialización alguna vez, y quienes <strong>No</strong> lo hicieron.</p>,
                                description: '',
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
                                caption: <p>De qué forma, quienes realizaron cursos de especialización, financiaron los mismos.</p>,
                                description: '',
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
                                caption: <p>Nivel de participación por género.</p>,
                                description: <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>,
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
                                caption: <p>Tipos de orientaciones sexuales para la muestra.</p>,
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
                content: (
                    <div>
                        <p>Lo bueno de contar con resultados de encuestas anteriores, es poder medir la evolución de ciertos indicadores a través del tiempo.</p>
                        <p>Para el caso de los salarios en Argentina, es de particular interés conocer su evolución, debido a las continuas fluctuaciones de la moneda y la inflación.</p>
                        <p>En los siguientes gráficos podremos ver como fueron cambiando las medianas salariales, y contrastarlas a su vez con su correspondiente valor en dólares según la cotización correspondiente a cada período.</p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Mediana salarial en Argentina',
                        data: [
                            {  // tab
                                title: 'Salarios en AR$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Pesos Argentinos'], currency: 'AR$' },
                                caption: <p>Serie histórica de salarios basada en encuestas anteriores de SysArmy.</p>,
                                description: <p>
                                    Nótese, que para el período del <code>2016-02-01</code>, los salarios parecieran haber bajado respecto al período anterior.<br />
                                    Sabemos que en general esto no sucede.  Probablemente esta anomalía tenga que ver, además de una diferencia de poblaciones, con un posible error en la normalización de sueldos netos pasados a bruto para dicho período.
                                    Puesto que dicha conversión es impracticable, preferimos ajustarnos a la <a href="#Metodologia">metodología elegida</a> y no alterar dichos valores adrede.
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en US$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios dividos por la cotización del dólar estadounidense en pesos.</p>,
                                description: <div>
                                    <p>
                                        Si bien los salarios en Argentina son mayormente en pesos, una forma fácil de poder medir el poder adquisitivo independientemente del momento, es a través de una moneda con mayor estabilidad.
                                    </p>
                                    <p>
                                        Sin hacer una análisis muy complejo del asunto, podemos decir que tenemos una <a href="https://es.wikipedia.org/wiki/Serie_temporal">serie temporal</a>, de la cual se hace notoria su componente estacional.  Podríamos explicar la estacionalidad, en términos generals, por los períodos inflacionarios (ascenso), y devaluaciones (descenso).
                                    </p>
                                </div>,
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
                                props: { ...charts['regions_salary_median'], isPercentual: false, isLogScale: false, currency: 'AR$' },
                                description: 'Mediana salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: '% de ajustes por inflación 2018',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_adjustment'], isPercentual: true, isLogScale: false },
                                description: 'Mediana de porcentaje de ajustes por región del país.',
                            },
                            {  // tab
                                title: 'Nivel de conformidad',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_acquiescence'], isPercentual: false, isLogScale: false },
                                description: 'Media de conformidad con el sueldo por región del país, en escala del 1 - 5.',
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
                                title: 'Por seniority y roles',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: 'Por seniority y actividad principal de la empresa',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['actividad_principal_seniority_salary_median'].data
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
                title: 'Según Educación',
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
                                title: 'Por nivel de estudios',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['nivel_estudios_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                },
                                description: 'Mediana salarial en [AR$] por región del país.',
                            },
                            {  // tab
                                title: 'Por cursos',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['hizo_curso_salary_median'].data,
                                },
                                caption: 'Mediana salarial en [AR$] por región del país.',
                                description: 'Pareciera ser que los cursos de especialización no influyen mucho en los salarios.  O sí?',
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
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'(\w+)'\)$/)[1]]: row.count,
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
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'(\w+)'\)$/)[1]]: row.count,
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
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'(\w+)'\)$/)[1]]: row.salary,
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
                    {  // section
                        title: 'Conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: historic_charts['historic_acquiescence_means'].data
                                        .map(row => ({ ...row, Otros: row.Otros || undefined })), // remove 0 values
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
                                component: 'Barh', // graph
                                props: { ...charts['education_hombre_stacked'], isPercentual: true, isStacked: true },
                                description: 'datos en volúmen total',
                            },
                            {  // tab
                                title: 'Mujeres',
                                component: 'Barh', // graph
                                props: { ...charts['education_mujer_stacked'], isPercentual: true, isStacked: true },
                                description: 'datos en volúmen total',
                            },
                            {  // tab
                                title: 'Otros',
                                component: 'Barh', // graph
                                props: { ...charts['education_otros_stacked'], isPercentual: true, isStacked: true },
                                description: 'datos en volúmen total',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Salarios',
                data: [
                    {  // section
                        title: 'Por seniority y rol',
                        data: [
                            {  // tab
                                title: 'Juniors',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_junior_median'].data
                                        .sort((a, b) => b['Hombre'] - a['Hombre']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$].',
                            },
                            {  // tab
                                title: 'Semi-Seniors',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_semisenior_median'].data
                                        .sort((a, b) => b['Hombre'] - a['Hombre']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$].',
                            },
                            {  // tab
                                title: 'Seniors',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_senior_median'].data
                                        .sort((a, b) => b['Hombre'] - a['Hombre']),
                                    cutoff: 15,
                                },
                                description: 'Mediana salarial en [AR$].',
                            },
                        ],
                    },
                    {  // section
                        title: 'Ajustes por inflación 2018',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['gender_salary_adjustment'], isPercentual: true, isLogScale: false },
                                description: 'Porcentaje de ajustes por región del país.',
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
                                component: 'Barh', // graph
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
    {
        title: 'Metodología',
        content: (
            <div>
                <p>
                    Para poder comprender mejor los resultados aquí expuestos, es importante hacer ciertas aclaraciones respecto del enfoque y la metodología utilizada.
                </p>
                <p>
                    <blockquote>- ¿Quieren decir que existe subjetividad en este reporte?</blockquote>
                    <blockquote>- Así es.  Aunque hicimos todo lo posible para minimizarla.</blockquote>
                    Si bien los resultados aquí expuestos son números, hay ciertos procedimientos manuales que ayudaron a seleccionarlos, agruparlos y haberles dado relevancia respecto de otros.  Más abajo mencionamos los más importantes:
                </p>
                <h4>Salarios</h4>
                <p>
                    Para los valores de los salarios aquí expuestos, ya sea por período, por género, experiencia, etc. utilizaremos la <a target="_blank" href="https://es.wikipedia.org/wiki/Mediana_(estad%C3%ADstica)">mediana</a>.
                    Este valor, si bien se aproxima al promedio de una muestra, no es exactamente eso.  La mediana salarial, nos sirve mejor para entender mejor cual es el valor típico de una muestra.
                </p>
                <p>
                    La mediana de los salarios, para los datos de la encuesta, suele estar levemente por debajo del valor promedio.
                </p>
                <h5>Valores atípicos</h5>
                <p>
                    Muchos salarios ingresados por los encuestados no se corresponden necesariamente con datos reales.  Esto puede ser debido a errores de tipeo, no entendimiento de la pregunta, o simplemente intencionales.
                    Para evitar que estos valores distorsionen los resultados, aplicamos el método del <a target="_blank" href="https://es.wikipedia.org/wiki/Rango_intercuart%C3%ADlico">Rango Intercuartílico</a> con un coeficiente de <i>3.5</i>.
                </p>
                <p>
                    Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio <a target="_blank" href="https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina">salario mínimo</a>.  Tanto para la más reciente encuesta como para las anteriores.
                </p>
                <h4>Experiencia</h4>
                <p>
                    Para los gráficos en los cuales mencionamos experiencia o seniority, hemos agrupado los datos relevados en tres grandes grupos:
                    <ol>
                        <li><strong>Junior</strong>: de 0 hasta 2 años.</li>
                        <li><strong>Semi-Senior</strong>: de 2 años inclusive hasta 5 años.</li>
                        <li><strong>Senior</strong>: desde 5 años inclusive.</li>
                    </ol>
                    Si bien esta forma de agrupar puede ser discutible, ayuda mucho a la hora de visualizar los datos y reducir la dimensionalidad.
                </p>
                <h4>Normalización de entradas de texto libre</h4>
                <p>
                    En la encuesta, algunos campos tales como <i>nombre de la carrera universitaria</i>, <i>nombre de la Universidad</i> y <i>rol</i>, son de texto libre.
                    Esto conlleva a una mayor dispersión de valores, dado que cada encuestado contesta de maneras distintas:
                    <ul>
                        <li>en mayúsculas</li>
                        <li>en minúsculas</li>
                        <li>con abreviaciones</li>
                        <li>sin abreviaciones</li>
                        <li>con errores de ortografía</li>
                        <li>sin errores de ortografía</li>
                        <li>con increíbles errores de ortografía</li>
                        <li>todas las combinaciones posibles de las anteriores</li>
                        <li>etc.</li>
                    </ul>
                </p>
                <p>
                    De existir esta dispersión, es impracticable poder obtener por ejemplo, una noción del salario típico de un Analista Programador que no completó sus estudios.
                </p>
                <p>
                    Para abordar este problema, quienes preparamos este informe escribimos <a target="_blank" href="https://colab.research.google.com/drive/17PHpUokoapMxA38AU2Uui7GA8kY9J0Og#scrollTo=mY9g6cyoPou2">una serie de reglas basadas en expresiones regulares</a> para normalizar los valores y también reducir la dimensionalidad.
                </p>
                <h4>Series temporales</h4>
                <h5>Salarios</h5>
                <p>
                    Para los valores presentados de Progresión Histórica, tanto en el apartado de <a href="#Salarios-Progresion-historica">Salarios</a> como de <a href="#Genero-Progresion-historica">Género</a>,
                    también hemos aplicado reglas de normalización de valores y remoción de valores atípicos.
                </p>
                <p>
                    Por ejemplo, para los datasets de entre <i>2016</i> a <i>2018</i>, los salarios podrían estar dados en valores brutos o netos según cada respuesta.
                    En ese caso, lo que se hizo fue convertir los valores netos a brutos, sumándoles el procentaje correspondiente a las cargas sociales.
                    Por supuesto que existe cierto grado de error, puesto que no consideramos el distorsivo Impuesto a las Ganancias, ya que sería impracticable dado la complijidad de su cálculo y la falta de información sobre posibles deducciones.
                </p>
                <h4>Representaciones Gráficas</h4>
                <h5>Escalas</h5>
                <p>
                    Para visualizaciones en las cuales el espectro de valores es demasiado amplio, y a veces distante entre valores de una misma muestra, utilizamos la <a target="_blank" href="https://es.wikipedia.org/wiki/Escala_logar%C3%ADtmica">escala logarítmica</a>.
                    Este recurso nos permite apreciar las datos de una manera más clara, por ejemplo cuando existen valores cercanos a cero y otros de uno o más órdenes de magnitud.
                </p>
            </div>
        )
    }
];