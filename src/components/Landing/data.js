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
                    Desde openqube trabajamos para poner a tu alcance toda la información sobre empleos en el sector IT.  
                    ¿Cómo lo hacemos? Por medio de nuestra plataforma colaborativa, en la que podés calificar empresas en las cuales hayas trabajado, ayudando a otros a tomar decisiones mejor informadas sobre su carrera.
                </p>
                <p>
                    Desde el año 2014 realizamos encuestas de sueldos a la comunidad tecnológica, relevando datos que son publicados en formato CSV a través del <a href="https://sysarmy.com.ar/blog/" target="_blank" rel="noopener noreferrer">blog de sysarmy</a>.
                </p>
                <p>
                    En el 2019 comenzamos a realizar análisis sobre lo relevado en las encuestas. Podés acceder a los mismos a través de estos links: &nbsp; 
                        <a href="https://openqube.io/encuesta-sueldos-2019.01" target="_blank" rel="noopener noreferrer">2019.01</a>
                        &nbsp;y <a href="https://openqube.io/encuesta-sueldos-2019.02" target="_blank" rel="noopener noreferrer">2019.02</a>.
                </p>
                <p>
                    Con la intención de ofrecer a nuestra comunidad los resultados de una manera más accesible, nos tomamos la libertad de seleccionar algunos datos estadísticos que consideramos, son de relevancia. Para tener una mayor comprensión sobre estos resultados, recomendamos leer el apartado de metodología.
                </p>
                <p>
                    A continuación, te mostramos los resultados del nuevo análisis para Diciembre 2019 - Enero 2020.
                </p>
                <br />
                <div className='authors-wrapper'>
                    <small>
                        El presente informe fue realizado para OpenQube
                    </small>
                    <small>
                        por <a className='author-name' href='https://twitter.com/luscastro' target="_blank" rel="noopener noreferrer">Luciana Castro</a> y <a className='author-name' href='https://twitter.com/gerardobort' target="_blank" rel="noopener noreferrer">Gerardo Bort</a>.
                    </small>
                </div>
            </div>
        )
    },
    { // category
        title: 'Perfil de participantes',
        content: (
            <div>
                <center>
                    <p><strong>{charts['total_surveyed']}</strong> fueron las respuestas totales en la República Argentina.</p>
                    <p><strong>{charts['total_analyzed_surveyed']}</strong> respuestas fueron consideradas en el presente análisis, es decir un <strong>{parseInt(charts['total_analyzed_surveyed'] / charts['total_surveyed'] * 10000) / 100}%</strong> del total.</p>
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
                                props: { ...charts['roles_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10 },
                                caption: <p>Porcentaje de encuestados por rol, presentados en <a href="#Metodologia">escala logarítmica</a>.</p>,
                            },
                        ],
                    },
                    {
                        title: '¿Cuánta gente contribuye al Open Source?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['opensource_percent'], isPercentual: true },
                                caption: <p>Quienes <strong>No</strong> contribuyen al Open Source, y quienes <strong>Sí</strong> lo hacen.</p>,
                                description: <p>
                                    A diferencia de las dos últimas encuestas de sueldos, por primera vez se observa una baja de gente que contribuye al Open Source: del 17% al 14%.
                                    ¿Será que la crisis le pega al Open Source local 🤔?
                                </p>
                            },
                        ],
                    },
                    {
                        title: '¿Cuánta gente programa por hobbie?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                caption: <p>Quienes <strong>No</strong> programan por hobbie, y quienes <strong>Sí</strong> lo hacen.</p>,
                                description: <p>
                                    Con tan solo un punto de diferencia respecto al período anterior (a la baja), podemos decir que igualmente el número de hobbistas se mantuvo estable.
                                </p>
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
                                description: 'Con el objetivo de no distorsionar el análisis, aquí se utiliza la escala de representación lineal.'
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
                                        Algunos nombres de carreras fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">metodología</a>.
                                    </p>
                                </div>),
                            },
                            { // tab
                                title: 'Carreras y estado',
                                component: 'Barh',
                                props: { ...charts['careeres_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 9, isStacked: false, markNegativeValues: ['Completado', 'En curso', 'Incompleto'], },
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
                                description: <div>
                                    <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target="_blank" rel="noopener noreferrer" href="http://www.mujeresprogramadoras.com.ar">investigación de Chicas En Tecnología</a> te pueda dar una respuesta.</p>
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Orientación sexual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_sexual_orientation_percent'], isPercentual: true },
                                caption: <p>Tipos de orientaciones sexuales para la muestra.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Discapacidad',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['discapacidad_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, },
                                caption: <p>Porcentajes de personas que reportaron tener alguna discapacidad.</p>,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Salarios',
        content: (
            <div>
                <p>Todos los valores de salarios aquí expresados tanto en moneda local, como en dólares, refieren a <strong>salario bruto</strong>: previo a <i>cargas sociales</i> e <i>impuestos</i>.</p>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Progresión histórica',
                content: (
                    <div>
                        <p>Lo bueno de contar con resultados de encuestas anteriores, es poder medir la evolución de ciertos indicadores a través del tiempo.</p>
                        <p>Para el caso de los salarios en Argentina, es de particular interés conocer su evolución, debido a las continuas fluctuaciones de la moneda y la inflación.</p>
                        <p>En los siguientes gráficos podremos ver cómo fueron cambiando las medianas salariales, y contrastarlas a su vez con su correspondiente valor en dólares según la cotización a cada período.</p>
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
                                caption: <p>Serie histórica de salarios basada en encuestas anteriores de sysarmy.</p>,
                                description: <p>
                                    Nótese, que para el período del <code>2016-02-01</code>, los salarios parecieran haber bajado respecto al período anterior.<br />
                                    Sabemos que en general esto no sucede.  Probablemente esta anomalía tenga que ver, además de una diferencia de poblaciones, con un posible error en la normalización de sueldos netos pasados a bruto para dicho período.
                                    Puesto que dicha conversión es impracticable, preferimos ajustarnos a la <a href="#Metodologia">metodología elegida</a> y no alterar dichos valores adrede.
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (oficial)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar estadounidense, en pesos.</p>,
                                description: <div>
                                    <p>
                                        Si bien los salarios en Argentina son mayormente en pesos, una forma fácil de medir el poder adquisitivo independientemente del momento, es a través de una moneda con mayor estabilidad.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (ahorro)',
                                component: 'Line', // graph
                                props: {
                                    // {"name": "0", "year": 2014, "part": 2, "publish_date": "2015-01-01", "Pesos Argentinos": 14000.0, "D\\u00f3lares Estadounidenses": 1637.0343952619544}
                                    data: historic_charts['historic_salary_medians'].data
                                        .reduce((acc, dp) => acc.concat([{ ...dp, 'Dólares Estadounidenses': (dp.publish_date === '2020-02-02' ? 0.7 : 1 ) * dp['Dólares Estadounidenses'] }]), []),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Dólares Estadounidenses'],
                                    currency: 'US$'
                                },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar ahorro, en pesos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro.
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad, el desdoblamiento del dólar vuelve a cobrar protagonismo, con la particulariadd que a diferencia de años anteriores
                                        no solo existe un cepo, sino también un precio único (mínimo al día de hoy) para ahorrar en dólares.
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
                        title: 'Salarios, ajustes y nivel de conformidad',
                        data: [
                            {  // tab
                                title: 'Mediana salarial',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_median'], isPercentual: false, isLogScale: false, currency: 'AR$', markNegativeValues: true, },
                                caption: <p>¿Cómo es un salario típico en cada región?<br/>Esto, a nivel comparativo, a grosso modo y sin contemplar otras variables.</p>,
                                description: <div>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Acumulado de ajustes 2019',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_adjustment'], isPercentual: true, isLogScale: false, markNegativeValues: true, },
                                caption: '¿Cual fue porcentaje de ajuste por inflación acumulado típico en cada región?',
                                description: <div>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Nivel de conformidad',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_acquiescence'], isPercentual: false, isLogScale: false, markNegativeValues: true, },
                                caption: 'Media de conformidad con el sueldo por región del país, en escala del 1 - 4, de poco a muy conforme.',
                                description: <div>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Puesto',
                data: [
                    {  // section
                        title: 'Salarios según rol, experiencia e industrias',
                        data: [
                            {  // tab
                                title: 'Por rol y experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial por rol y años de experiencia en el puesto.',
                                description: <div>
                                    <p> La seniority aquí mencionada refiere a años de experiencia en el rol. Para más detalle ver <a href="#Metodologia">metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Por rol e industria',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_actividad_principal_salary_median'].data,
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Otras industrias', 'Producto basado en Software', 'Servicios / Consultoría de Software / Digital'],
                                },
                                caption: 'Mediana salarial por rol e industria.',
                            },
                            {  // tab
                                title: 'Por industria y experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['actividad_principal_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial por años de experiencia en el puesto y rol.',
                                description: <div>
                                    <p>Aquí puede notarse una diferencia en los niveles de salarios que manejan las empresas de Producto basado en software, respecto de las otras.</p>
                                    <p>En segundo lugar, y muy cercano al siguiente, quienes trabajan en áreas de Sistemas dando soporte a Otras Industrias. Por último, Servicios / Consultoría de Software / Digital.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Educación',
                data: [
                    {  // section
                        title: 'Salarios según nivel de educación',
                        data: [
                            {  // tab
                                title: 'Educación formal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['nivel_estudios_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    currency: 'AR$',
                                    markNegativeValues: true,
                                },
                                caption: 'Mediana salarial por nivel de educación formal alcanzado.',
                                description: 'Se excluyen por defecto aquellos niveles de estudio que no cuentan con suficiente representación sobre la muestra.',
                            },
                            {  // tab
                                title: 'Cursos / Especializaciones',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['hizo_curso_salary_median'].data,
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial para quienes hicieron cursos de especialización y quienes no.',
                                description: 'Pareciera ser que los cursos de especialización no influyen mucho en los salarios.  O sí?',
                            },
                        ],
                    },
                    {  // section
                        title: 'Salarios según carrera y experiencia',
                        data: [
                            {  // tab
                                title: 'Recibidos por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_seniority_salary_median'].data,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial por carrera y años de experiencia.',
                                description: <div>
                                    <p>Para este ranking entre carreras solo contamos participantes que las hayan completado.  También hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes.  Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            // {  // tab
                            //     title: 'Estudiantes por experiencia',
                            //     component: 'Barh', // graph
                            //     props: {
                            //         data: charts['carrera_seniority_salary_median_encurso'].data,
                            //         currency: 'AR$',
                            //         markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                            //     },
                            //     caption: 'Mediana salarial por carrera y años de experiencia.',
                            //     description: <div>
                            //         <p>Para este ranking entre carreras solo contamos participantes que estén en curso.  También hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes.  Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                            //         <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                            //     </div>,
                            // },
                            {  // tab
                                title: 'Por carrera y estado',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_estado_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    currency: 'AR$',
                                    markNegativeValues: ['Completado', 'En curso', 'Incompleto'],
                                },
                                caption: 'Mediana salarial por carrera y estado de de la carrera.',
                                description: <div>
                                    <p>Para este ranking entre carreras, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes.  Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
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
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial según plataformas y años de experiencia.',
                                description: 'Se muestra por defecto las plataformas más utilizadas, cuya cantidad de menciones pase el umbral de 0.05%.'
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
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial según lenguaje de programación años de experiencia.',
                                description: 'Se muestra por defecto los lenguajes de programación más utilizados, cuya cantidad de menciones esté por encima del umbral de 0.05%.'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Contrato',
                data: [
                    {  // section
                        title: 'Sueldos dolarizados vs. en pesos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['sueldo_dolarizado_salary_median'].data
                                        .map(val => ({
                                            ...val,
                                            name: (val.name === 'True' ? 'Sueldo dolariazdo' : 'Sueldo no dolariazdo'),
                                        })),
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial según sueldos dolarizados y experiencia.',
                                description: <p>
                                    En <a href="#Trabajo-Tipos-de-contrato-Que-porcentaje-tiene-su-sueldo-dolarizado">este otro gráfico</a> puede verse el porcentaje de personas que gozan de este beneficio.
                                </p>
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Género',
        content: (
            <div>
                <p>En cuanto a los datos analizados en cuestión de género, podemos destacar los siguientes puntos interesantes:</p>
                <ol>
                    <li>El nivel de participación de mujeres <a href="#Genero-Progresion-historica-Historico-de-nivel-de-participacion">(14,22%)</a> creció pero muy poco respecto al período anterior (14,08%). El grupo de Otros presenta una pequeña disminución.</li>
                    <li>La brecha salarial en la población muestreada <a href="#Genero-Experiencia-Salario-por-genero-segun-anos-de-experiencia">se hace aún más evidente</a>  a partir de los 5 - 8 años de experiencia.</li>
                    <li>Se evidencia un bajo <a href="#Genero-Experiencia-Conformidad">nivel de conformidad salarial</a> en mujeres con muchos años de experiencia.</li>
                </ol>
                <p>
                    La brecha salarial general es grande: <a href="#Genero-Progresion-historica-Historico-de-salarios">20,97%</a> y se puede observar un aumento de la misma respecto del período anterior 😐.
                    Según los datos recabados, la brecha se acentúa en mujeres con más de 5 años de experiencia,
                    donde <a href="#Genero-Experiencia-Salario-por-genero-segun-anos-de-experiencia">se encuentra el mayor porcentaje de participación</a> (65,86%).
                </p>
                <h4>Algunos datos</h4>
                <ol>
                    <li>Las nuevas generaciones de mujeres en IT parecen tener condiciones de trabajo más equitativas 👩‍💻💪.</li>
                    <li>El conjunto de datos "años de experiencia" y "me identifico" (género), si bien no pertenece a una serie histórica, nos permite viajar en el tiempo y tener "una foto" de cómo eran las cosas hace unos años, incluso antes del comienzo del relevamiento de encuestas de sysarmy.
                        A partir de <a href="#Genero-Experiencia-Participacion-por-genero-segun-anos-de-experiencia">este gráfico</a>, podemos interpretar que, lentamente, hay mayor diversidad en IT año tras año 👩‍💻💪.</li>
                    <li>A pesar de que en el año 2019 se veía equiparado el nivel de <a href="#Genero-Progresion-historica-Historico-de-conformidad">conformidad salarial</a> entre hombres y mujeres, nuevamente se observa una diferencia en el de las mujeres (2,49%) con respecto al de hombres (2,55%) 😐.</li>
                    <li>Las mujeres siguen a la cabeza en lo que respecta al <a href="#Genero-Formacion-Nivel-de-estudios-alcanzados-y-completitud">mérito académico</a> 🤓: mayor nivel de estudios, mayor grado de completitud 💅.</li>
                </ol>
                <h4>Para seguir mejorando</h4>
                <ol>
                    <li>Los ajustes por inflación <a href="#Genero-Ajuste-salarial-Ajustes-por-inflacion-2019-2020">están lejos de ser equitatitvos</a> aún.</li>
                    <li>La brecha salarial entre hombres y mujeres <a href="#Genero-Experiencia-Salario-por-genero-segun-anos-de-experiencia">sigue existiendo</a>, es mucha y el progreso en este punto pareciera haberse estancado. Especialmente para profesionales con +5 años de experiencia.</li>
                    <li>La población que participa en la encuesta sigue siendo <a href="#Genero-Progresion-historica-Historico-de-nivel-de-participacion">85%+ hombres</a>.</li>
                </ol>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Histórico de nivel de participación',
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
                                caption: 'Serie de tiempo de porcentaje de participación por género basada en encuestas anteriores (excluyendo mayoría).',
                                description: 'Al excluir la parte mayoritaria, puede apreciarse mejor la relación de porcentajes para Mujeres y Otros.',
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
                                caption: 'Serie de tiempo de porcentaje de participación por género basada en encuestas anteriores.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Histórico de salarios',
                        data: [
                            {  // tab
                                title: 'Salarios por género',
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
                                    currency: 'AR$',
                                    customStroke: {'Otros': '#ccc'},
                                },
                                caption: 'Serie histórica de salarios basada en encuestas anteriores.',
                                description: 'Se han aplicado reglas de normalización. El segmento "otros" está grisado, ya que no se cuenta con datos suficientes.',
                            },
                            {  // tab
                                title: 'Histórico de brecha salarial',
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        // row: {"name": "(Timestamp(\'2016-02-01 00:00:00\'), \'Hombre\')", "salary": 9999}
                                        // dates: { '2016-02-01': { publish_date: '2016-02-01', 'Hombre': 9999, 'Mujer': 9999, 'Otros': 9999 } }
                                        historic_charts['historic_gender_salary_median'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'(\w+)'\)$/)[1]]: row.salary,
                                                },
                                            }), {})
                                    )
                                    // dates: [ { publish_date: '2016-02-01', 'Hombre': 9999, 'Mujer': 9999, 'Otros': 9999 } }, ...]
                                    .map((date) => ({
                                        publish_date: date.publish_date,
                                        'Mujer-Hombre': (date['Hombre'] - date['Mujer'])/Math.min(date['Hombre'], date['Mujer']),
                                        'Otros-Hombre': (date['Hombre'] - date['Otros'])/Math.min(date['Hombre'], date['Otros']),
                                    })),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Mujer-Hombre', 'Otros-Hombre'],
                                    isPercentual: true,
                                    customStroke: {'Otros-Hombre': '#ccc'},
                                },
                                caption: 'Serie histórica de brecha salarial de minoreias respecto del grupo mayoritario.',
                                description: (<>
                                    <p>Se han aplicado reglas de normalización. El segmento de "otros" está grisado, ya que no se cuenta con suficientes datos.</p>
                                    <p>
                                        El cálculo de la brecha salarial general aquí mostrado, se realizó obteniendo la diferencia de medianas salariales entre los grupos comparados, sobre el mínimo de ambos.
                                        Esto representa el porcentaje de aumento que debería aplicarse al grupo de menor salario, para equiparar las condiciones.
                                    </p>
                                </>),
                            },
                        ],
                    },
                    {  // section
                        title: 'Histórico de conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: historic_charts['historic_acquiescence_means'].data
                                        .map(row => ({ ...row, Otros: row.Otros || undefined, publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] })), // remove 0 values
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Hombre', 'Mujer', 'Otros'],
                                    customStroke: {'Otros': '#ccc'},
                                },
                                caption: 'Serie histórica del nivel de conformidad con los salarios basada en encuestas anteriores.',
                                description: 'Escala de 1 - 4. El segmento "otros" está grisado, ya que no se cuenta con datos suficientes.',

                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Formación',
                content: <div>
                    <p>
                        En este apartado, segmentamos los niveles de educación formal alcanzados y el grado de completitud de cada uno, por género.
                        Cabe aclarar que en el caso de Otros, tal como se puede ver en el apartado <a href="#Perfil-de-participantes-Demografia">Demografía</a>, el número de muestras es extremadamente reducido, y es muy posible que lo detallado aquí no sea representativo de la realidad.
                    </p>
                </div>,
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzados y completitud',
                        data: [
                            {  // tab
                                title: 'Hombres',
                                component: 'Barh', // graph
                                props: { ...charts['education_hombre_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cual es el mayor nivel de estudios alcanzado de los hombres, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los hombres encuestados.'
                            },
                            {  // tab
                                title: 'Mujeres',
                                component: 'Barh', // graph
                                props: { ...charts['education_mujer_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cual es el mayor nivel de estudios alcanzado de las mujeres, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los mujeres encuestadas.'
                            },
                            {  // tab
                                title: 'Otros',
                                component: 'Barh', // graph
                                props: { ...charts['education_otros_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cual es el mayor nivel de estudios alcanzado de "otros", y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de "otros" encuestados.'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Salario por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Salarios por experiencia',
                                component: 'Line', // graph
                                props: {
                                    data: charts['experience_gender_salary_median'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Hombre', 'Mujer', 'Otros'],
                                    currency: 'AR$',
                                    customStroke: {'Otros': '#ccc'},
                                },
                                caption: 'Mediana salarial por género, según años de experiencia.',
                                description: 'Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci. El segmento "otros" está grisado, ya que no se cuenta con datos suficientes, de ahí la alternancia.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Participación por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Mujeres / Otros',
                                component: 'Area', // graph
                                props: {
                                    data: charts['experience_gender_percent'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Mujer', 'Otros'],
                                    isPercentual: true,
                                },
                                caption: 'Nivel de participación por género, según años de experiencia. El porcentaje restante es de hombres.',
                                description: 'Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci. El grupo de hombres fue excluído por ser amplia mayoría.',
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
                                    data: charts['experience_gender_conformidad_mean'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Hombre', 'Mujer', 'Otros'],
                                    customStroke: {'Otros': '#ccc'},
                                },
                                caption: 'Conformidad con los salarios por género según años de experiencia.',
                                description: 'Escala de 1 - 4.  Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci.  El segmento "otros" está grisado, ya que no se cuenta con datos suficientes, de ahí la alternancia.',

                            },
                        ],
                    },
                    {  // section
                        title: 'Participación en las industrias',
                        data: [
                            {  // tab
                                title: 'Actividad principal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['actividad_principal_gender_percent'].data
                                        .sort((a, b) => b['Mujer'] - a['Mujer']),
                                    isPercentual: true,
                                    isLogScale: true,
                                },
                                caption: 'Porcentaje de hombres, mujeres y otros en cada grupo de sectores de la industria.',
                                description: <p>
                                    También podés ver el <a href="#Trabajo-Caracteristicas-de-las-Empresas-Actividad-Principal-de-la-Empresa">porcentaje de insidencia de cada sector de la industria sobre el total de la poblaciones censada</a>.
                                </p>,
                            },
                        ],
                    },
                ]
            },
            { // sub-category
                title: 'Ajuste salarial',
                data: [
                    // {  // section
                    //     title: 'Por rol y experiencia',
                    //     data: [
                    //         {  // tab
                    //             title: 'Juniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_junior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol y hasta 2 años de experiencia.',
                    //         },
                    //         {  // tab
                    //             title: 'Semi-Seniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_semisenior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol para 2 a 5 años de experiencia.',
                    //         },
                    //         {  // tab
                    //             title: 'Seniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_senior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol para 5 años de experiencia o más.',
                    //         },
                    //     ],
                    // },
                    {  // section
                        title: 'Ajustes por inflación 2019-2020',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['gender_salary_adjustment'].data
                                        .map(dp => ({ ...dp, name: dp.name + '\n' })), // hack to not highlight Otros (Barh default behavior for non-gender data)
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: 'Mediana de porcentaje de ajustes por inflación acumulados en el año 2019 a 2020 por género.',
                                description: <>
                                    <p>
                                        Como contraste, la <a href="http://www.bcra.gov.ar/PublicacionesEstadisticas/Principales_variables.asp" target="_blank" rel="noopener noreferrer">inflación interanual publicada por el Banco Central al 31 de diciembre de 2019</a> fue de <strong>53,8%</strong>.
                                    </p>
                                    <p>
                                        Es muy llamativo que el fenómeno se repite al igual que en el <a href="https://openqube.io/encuesta-sueldos-2019.02#Genero-Ajuste-salarial-Ajustes-por-inflacion-2019" target="_blank" rel="noopener noreferrer">período anterior</a>.
                                        Si bien, no podemos afirmar que exista una mala intencionalidad respecto a la aplicación de aumentos por inflación según género. Sí podemos observar que, debido a la no diversidad del sector, los grupos minoritarios no tienen igualdad de condiciones.
                                        Una posible explicación sería la reciente inserción de las minorías, que tal vez por ser incipiente, queden excluídas de las empresas que presentan mejores condiciones.
                                    </p>
                                </>,
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
                                props: { ...charts['plataformas'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, cutoff: 10, sumOthers: false },
                                caption: 'Plataformas más utilizadas entre los participantes',
                                description: 'Las plataformas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['lenguajes_de_programacion'], isPercentual: true, isLogScale: true, minLogScale: 0.0006, cutoff: 10, sumOthers: false },
                                caption: 'Lenguajes de programación más utilizadas entre los participantes',
                                description: 'Los lenguajes de programación no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Frameworks, Herramientas y Librerías',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['frameworksherramientas_y_librerias'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10, sumOthers: false },
                                caption: 'Frameworks, Herramientas y Librerías más utilizadas entre los participantes',
                                description: 'Los mismos no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Bases de Datos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['bases_de_datos'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10, sumOthers: false },
                                caption: 'Bases de datos más utilizadas entre los participantes',
                                description: 'Las bases de datos no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'QA / Testing',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['qa_testing'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10, sumOthers: false },
                                caption: 'Herramientas de QA / Testing más utilizadas entre los participantes',
                                description: <div>
                                    <p>Las mismas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.</p>
                                    <p>En esta variable puede notarse que la cantidad de respondentes es mucho menor a las anteriores.  Si bien la calidad y sus herramientas conciernen a todas las áreas, quizás muchos hayan omitido responder dado que también existen roles asociados más específicos.</p>
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: 'IDEs',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['ides'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, cutoff: 10, sumOthers: false },
                                caption: 'IDEs más utilizadas entre los participantes',
                                description: <div>
                                    <p>Las mismas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.</p>
                                    <p>Para quienes no estén familiarizados con el término, un <a target="_blank" rel="noopener noreferrer" href='https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado'>IDE</a> (Integrated Development Environment) es es una aplicación informática que proporciona servicios integrales para facilitar el desarrollo de software.</p>
                                </div>,
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
                                caption: 'Porcentaje de tipos de contrato de trabajo en escala logarítimica.',
                            },
                        ],
                    },
                    {
                        title: '¿Qué porcentaje tiene su sueldo dolarizado?',
                        data: [
                            { // tab
                                title: 'Sueldos dolarizados',
                                component: 'Pie',
                                props: {
                                    data: charts['sueldo_dolarizado_percent'].data
                                        .map(val => ({
                                            ...val,
                                            name: (val.name === 'True' ? 'Sueldo dolariazdo' : 'Sueldo no dolariazdo'),
                                        })),
                                    isPercentual: true,
                                },
                                caption: <p>Porcentaje de personas que tienen su sueldo dolarizados, y quienes no lo tienen.</p>,
                                description: <p>Podemos notar un incremento del 1% <a target="_blank" rel="noopener noreferrer"  href="https://openqube.io/encuesta-sueldos-2019.02#Trabajo-Tipos-de-contrato-Que-porcentaje-tiene-su-sueldo-dolarizado" >respecto al reporte pasado</a>.</p>,
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
                                caption: 'Porcentaje de participantes que han recibido o no, bonos como parte de la compensación, en escala logarítimica.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Beneficios Extra',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['beneficios_extra'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Aquí se enumera los beneficios más comunes entre los reportados.',
                                description: 'Los beneficios no son excluyentes, por lo que los valores indican qué porcentajes de participantes cuentan con los mismos.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Porcentajes de Ajuste por Inflación a la fecha (2020)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['de_que_fue_el_ajuste'], isPercentual: true },
                                description: <div>
                                    <p>Los rangos (eje vertical) representan el porcentaje de ajuste o aumento por inflación recibido en el año. La longitud de las barras representa el porcentaje de encuestados que recibieron ajustes dentro de ese rango.</p>
                                </div>,
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
                                description: 'Datos porcentuales',
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
                                description: 'Datos porcentuales',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cuánta gente recomienda su lugar de Trabajo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['la_recomendas_como_un_buen_lugar_para_trabajar'], isPercentual: true },
                                description: (<span>
                                    Datos porcentuales, por clase según indicador&nbsp;<a target='_blank' href='https://es.wikipedia.org/wiki/Net_Promoter_Score' rel="noopener noreferrer">Net Promoter Score</a>.
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

                <blockquote>- ¿Quieren decir que existe subjetividad en este reporte?</blockquote>
                <blockquote>- Así es.  Aunque hicimos todo lo posible para minimizarla.</blockquote>
                Si bien los resultados aquí expuestos son números, hay ciertos procedimientos manuales que ayudaron a seleccionarlos, agruparlos y haberles dado relevancia respecto de otros.  Más abajo mencionamos los más importantes:

                <h4>Representatividad de la muestra</h4>
                <p>
                    Para todos los segmentos sobre los cuales se ha hecho rankings de algún tipo (de salarios, conformidad, etc.), hemos tenido en cuenta principalmente el <strong>tamaño de la muestra</strong> por sobre otros factores.
                    Debido a la multidimensionalidad de los datos, no creímos conveniente utilizar la <i>homogeneidad</i> para determinar la representatividad, ya que por ejemplo, para una misma región la dispersión de salarios puede ser muy grande debido a otros factores tales como la antiguedad, el nivel de estudios o la tecnología.
                </p>
                <p>
                    En prácticamente todos los rankings de salarios (gráficos de barras horizontales), no quisimos dejar ningún valor fuera del análisis. Pero para evitar inducir a interpretaciones erróneas, hemos marcado como con <i>datos insuficientes</i> a aquellos elementos que no lleguen superar el umbral del 0.05% de muestras sobre el total.
                    Por ejemplo, en <a href="#Salarios-Segun-Educacion-Salarios-segun-carrera-y-experiencia">salarios según carrera y experiencia</a>, Ingeniería Industrial rankea entre las primeras 3 carreras con mejores salarios.  Sin embargo, la cantidad de ingenieros industriales por sobre el total de la población encuestada es muy bajo como para afirmarlo.
                </p>
                <p>
                    Para otros segmentos, simplemente hicimos un corte sobre los resultados más frecuentes (rankings).  Con esto, aseguramos también que los datos presentados sean relevantes para un análisis.
                </p>
                <h4>Salarios</h4>
                <p>
                    Para los valores de los salarios aquí expuestos, ya sea por período, por género, experiencia, etc. utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Mediana_(estad%C3%ADstica)">mediana</a> del salario bruto.
                    Este valor, si bien se aproxima al promedio de una muestra, no es exactamente eso.  La mediana salarial, nos sirve mejor para entender mejor cual es el valor típico de una muestra.
                </p>
                <p>
                    La mediana de los salarios, para los datos de la encuesta, suele estar levemente por debajo del valor promedio.
                </p>
                <h5>Valores atípicos</h5>
                <p>
                    Muchos salarios ingresados no se corresponden necesariamente con datos reales.  Esto puede ser debido a errores de tipeo, no entendimiento de la pregunta, o simplemente intencionales.
                    Para evitar que estos valores distorsionen los resultados, aplicamos el método del <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Rango_intercuart%C3%ADlico">Rango Intercuartílico</a> con un coeficiente de <i>3.5</i>.
                    Es muy posible que existan salarios reales que hayan quedado fuera del análisis, por ser estos realmente outliers.
                </p>
                <p>
                    Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina">salario mínimo</a>.  Tanto para la más reciente encuesta como para las anteriores.
                </p>
                <h5>Cotización del dólar</h5>
                <p>
                    Para el cálculo de salarios dolarizados, tomamos la cotización intradiaria promedio de Bloomberg, y tomamos la mediana del valor del día de publicación con un delta de 5 días.
                </p>
                <h4>Experiencia</h4>
                <p>Para los gráficos en los cuales mencionamos experiencia o seniority, hemos agrupado los datos relevados en tres grandes grupos: </p>
                <ol>
                    <li><strong>Junior</strong>: de 0 hasta 2 años.</li>
                    <li><strong>Semi-Senior</strong>: de 2 años inclusive hasta 5 años.</li>
                    <li><strong>Senior</strong>: desde 5 años inclusive.</li>
                </ol>
                <p>Si bien esta forma de agrupar puede ser discutible, ayuda mucho a la hora de visualizar los datos y reducir la dimensionalidad.</p>
                <h4>Normalización de entradas de texto libre</h4>
                <p>
                    En la encuesta, algunos campos tales como <i>nombre de la carrera universitaria</i>, <i>nombre de la Universidad</i> y <i>rol</i>, además de presentar opciones predefinidas, también permiten texto libre (otros).
                    Esto conlleva a una mayor dispersión de valores, dado que cada encuestado contesta de maneras distintas:
                </p>
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
                <p>
                    De existir amplia dispersión, es impracticable poder obtener por ejemplo, una noción del salario típico de un Analista Programador que no completó sus estudios.
                </p>
                <p>
                    Para abordar este problema, quienes preparamos este informe escribimos <a target="_blank" rel="noopener noreferrer" href="https://colab.research.google.com/drive/12wza039dl0UjCSypYZY3gtTqW6OWbFI9#scrollTo=mY9g6cyoPou2">una serie de reglas basadas en expresiones regulares</a> para normalizar los valores y también reducir la dimensionalidad.
                </p>
                <p>
                    Como mejora al relevamiento anterior, hemos además provisto durante la encuesta 2020.01, todos los valores más relevantes normalizados como resultado del análisis 2020.02.
                    De esta forma, no solo hemos facilitado el proceso de carga de datos, sino también hemos minimizado la necesidad de normalización, dando lugar a un análisis aún más preciso.
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
                    Para visualizaciones en las cuales el espectro de valores es demasiado amplio, y a veces distante entre valores de una misma muestra, utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Escala_logar%C3%ADtmica">escala logarítmica</a>.
                    Este recurso nos permite apreciar los datos de una manera más clara, por ejemplo cuando existen valores cercanos a cero y otros de uno o más órdenes de magnitud.
                </p>
                <h5>Datos insuficientes</h5>
                <p>
                    En muchas ocasiones, dado el nivel granularidad de ciertos gráficos, la cantidad escasa de datapoints en algunos segmentos, pueden inducir a conclusiones erróneas.
                    Para advertir al lector de estos casos, hemos grisado en todos los gráficos posibles aquellos segmentos cuya representatividad no supere el umbral de 0.05%, tanto gráficos de barras horizontales como series históricas.
                </p>
                <h4>Repositorios</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/lucianacastro/openqube-sueldos">Código fuente de esta publicación (interfaz web)</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://colab.research.google.com/drive/1int9ytV6WfLoVtBJprXNW547AVMQjRkr">Notebook de análisis período 2020.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://colab.research.google.com/drive/124l41_dW4wvrNjpxABcxzMQmfY-qAqkq">Notebook de análisis de la serie histórica de encuestas sysarmy 2014.02 - 2020.01</a></li>
                </ul>
                <h4>Análisis previos</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.02">Resultados de la encuesta de sueldos 2019.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.01">Resultados de la encuesta de sueldos 2019.01</a></li>
                </ul>
            </div>
        )
    }
];
