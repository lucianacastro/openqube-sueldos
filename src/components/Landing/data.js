import React from 'react';
import charts from './charts';
import historic_charts from './historic-charts';

// si al momento de publicar la nueva versión de la encuesta existe un cepo cambiario y
// un tipo de cambio desdoblado en oficial/ahorro, agregar la fecha de publicación aquí.
const hayDolarAhorro = ['2020-02-02', '2020-08-15', '2021-02-15','2021-08-23'];

function sortBySalary(salaries) {
    return salaries.sort((a, b) => bestSalary(b) - bestSalary(a));
}

function bestSalary(s) {
    return Math.max(s["Junior"], s["Semi-Senior"], s["Senior"]);
}

let genders = ['Hombre Cis', 'Mujer Cis', 'Otros', 'Prefiero No Decir', 'No Binarie']


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
                    Desde el año 2014 realizamos encuestas de sueldos a la comunidad tecnológica, relevando datos que son publicados a través del <a href="https://sysarmy.com.ar/blog/" target="_blank" rel="noopener noreferrer">blog de sysarmy</a>.
                </p>
                <p>
                    En el 2019 comenzamos a realizar análisis sobre lo relevado en las encuestas. Podés acceder a las ediciones anteriores aquí:
                    <ul>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.01" target="_blank" rel="noopener noreferrer">2019.01</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.02" target="_blank" rel="noopener noreferrer">2019.02</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2020.01" target="_blank" rel="noopener noreferrer">2020.01</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2020.02/" target="_blank" rel="noopener noreferrer">2020.02</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/" target="_blank" rel="noopener noreferrer">2021.01 </a></li>
                    </ul>
                </p>
                <p>
                    Con la intención de ofrecer a nuestra comunidad los resultados de una manera más accesible, nos tomamos la libertad de seleccionar algunos datos estadísticos que consideramos, son de relevancia. Para tener una mayor comprensión sobre estos, recomendamos leer el apartado de <a href="#Metodologia">metodología</a>.
                </p>
                <p>
                    A continuación te mostramos los resultados del nuevo análisis para julio - agosto 2021.
                </p>
                <br />
                <div className='authors-wrapper'>
                    <center>    
                        <small>
                        El presente informe fue realizado para openqube por <a className='author-name' href='https://ar.linkedin.com/in/pcasas' target="_blank" rel="noopener noreferrer">Pablo Casas</a> , <a className='author-name' href='https://ar.linkedin.com/in/leonardo-genzano-1b275193/' target="_blank" rel="noopener noreferrer">Leonardo Genzano </a> y <a className='author-name' href='https://twitter.com/cocodibuja' target="_blank" rel="noopener noreferrer">Nico Quiroz</a> de <a className='author-name' href='https://escueladedatosvivos.ai/' target="_blank" rel="noopener noreferrer">Escuela de Datos Vivos </a>
                        </small>
                    </center>
                    <small>

                        (basado en el trabajo de <a className='author-name' href='https://www.linkedin.com/in/nadiakazlauskas/' target="_blank" rel="noopener noreferrer">Nadia Kazlauskas</a> , <a className='author-name' href='https://www.linkedin.com/in/fernandezpablo85/' target="_blank" rel="noopener noreferrer">Pablo Fernandez</a>, <a className='author-name' href='https://twitter.com/luscastro' target="_blank" rel="noopener noreferrer">Luciana Castro</a> y <a className='author-name' href='https://twitter.com/gerardobort' target="_blank" rel="noopener noreferrer">Gerardo Bort</a>)
                    </small>
                    <a href="https://sysar.my/discord" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.postimg.cc/66HPZDtf/discord-683x90.jpg" style={{ "margin-top": "20px" }}></img>
                    </a>
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
                                description: <p>La <a href="#Metodologia">escala logarítmica</a> permite resaltar las diferencias entre provincias, incluso cuando ésta sea muy amplia.  Nótese que las líneas verticales de la cuadrícula no son equidistantes, tampoco los valores de la escala son secuenciales.</p>,
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
                        title: '¿Contribuís a proyectos Open Source?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['opensource_percent'], isPercentual: true },
                                description: <p>
                                    Se observan valores similares a los de la encuesta pasada.
                                </p>
                            },
                        ],
                    },
                    {
                        title: '¿Programás por hobbie?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                description: <p>
                                    Se observan valores similares a los de la encuesta pasada.
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
                                caption: 'Porcentaje de encuestados por años de antigüedad en su compañía actual. Respecto a la última edición el porcentaje correspondiente al rango de 0-1 año disminuyó. Esto indica que hay menor rotación con respecto a la última encuesta',
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
                        title: 'Nivel de estudios alcanzado y estado actual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['education_stacked'], isPercentual: true, isStacked: true },
                                caption: 'Este gráfico nos permite ver para nuestra población qué porcentaje de encuestados alcanzó cada nivel de estudios.  A su vez, por cada uno, podemos apreciar el grado de completitud o estado de sus carreras.',
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
                                        Es importante aclarar que para muchas universidades, en especial cuanto más abajo estén listadas, la cantidad de muestras puede ser muy baja y no ser representativa de la realidad de dichas instituciones.
                                    </p>
                                </div>),
                            },
                        ],
                    },
                    {
                        title: '¿Realizaste cursos de especialización?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['specialization_percent'], isPercentual: true },
                                description: '',
                            },
                        ],
                    },
                    {
                        title: 'Si realizaste, ¿Quién pagó por los cursos de especialización?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['specialization_pays_percent'], isPercentual: true },
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
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: <div>
                                    <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target="_blank" rel="noopener noreferrer" href="http://www.mujeresprogramadoras.com.ar">investigación de Chicas En Tecnología</a> te pueda dar una respuesta.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute'], isPercentual: false },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>
                                   
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
                                props: { ...charts['demographics_sexual_orientation_percent'], isLogScale: true, isPercentual: true },
                                caption: <p></p>,
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
                                caption:  <p>Porcentajes de personas que reportaron tener alguna discapacidad, el  <strong>{
                                    parseFloat(charts['n_persons_with_no_disabilities'].data.map(item => item.value)*100).toFixed(2)
                                    }</strong> % no informaron discapacidad</p>
  
        
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
                        <p>Lo bueno de contar con resultados de encuestas anteriores es poder medir la evolución de ciertos indicadores a través del tiempo.</p>
                        <p>Para el caso de los salarios en Argentina, es de particular interés conocer su evolución, debido a las continuas fluctuaciones de la moneda y la inflación.</p>
                        <p>En los siguientes gráficos podremos ver cómo fueron cambiando las medianas salariales y contrastarlas a su vez con su correspondiente valor en dólares según la cotización a cada período.</p>
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
                                    Nótese que para el período del <code>2016-02-01</code>, los salarios parecieran haber bajado respecto al período anterior.<br />
                                    Sabemos que en general esto no sucede. Probablemente esta anomalía tenga que ver, además de una diferencia de poblaciones, con un posible error en la normalización de sueldos netos pasados a bruto para dicho período.
                                    Puesto que dicha conversión es impracticable, preferimos ajustarnos a la <a href="#Metodologia">metodología elegida</a> y no alterar dichos valores adrede.
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (oficial)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar estadounidense, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Si bien los salarios en Argentina son mayormente en Pesos Argentinos, una forma fácil de medir el poder adquisitivo independientemente del momento, es a través de una moneda con mayor estabilidad.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (ahorro)',
                                component: 'Line', // graph
                                props: {
                                    // {"name": "0", "year": 2014, "part": 2, "publish_date": "2015-01-01", "Pesos Argentinos": 14000.0, "D\\u00f3lares Estadounidenses": 1637.0343952619544}
                                    data: historic_charts['historic_salary_medians'].data
                                        .reduce((acc, dp) => acc.concat([{ ...dp, 'Dólares Estadounidenses': (hayDolarAhorro.includes(dp.publish_date) ? 0.7 : 1) * dp['Dólares Estadounidenses'] }]), []),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Dólares Estadounidenses'],
                                    currency: 'US$'
                                },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar ahorro, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro .
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar vuelve a cobrar protagonismo, con la particularidad que a diferencia de años anteriores
                                        no solo existe un cepo, sino también un precio único (mínimo al día de hoy) para ahorrar en dólares.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (Blue)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses Blue'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar Blue, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro .
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar vuelve a cobrar protagonismo, con la particularidad que a diferencia de años anteriores
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
                                caption: <p>¿Cómo es un salario típico en cada región?<br />Esto, a nivel comparativo, a grosso modo y sin contemplar otras variables.</p>,
                                description: <div>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Acumulado de ajustes 2021',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_adjustment'], isPercentual: true, isLogScale: false, markNegativeValues: true, },
                                caption: '¿Cuál fue porcentaje de ajuste por inflación acumulado típico en cada región?',
                                description: <div>
                                    <p>Para este ranking entre regiones hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Nivel de conformidad',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_acquiescence'], isPercentual: false, isLogScale: false, markNegativeValues: true, },
                                caption: 'Media de conformidad con el sueldo por región del país, en escala del 1 - 4, de poco a muy conforme. Si bien el ranking cambio respecto a la ultima encuesta, los valores de diferencia no son muy altos',
                                description: <div>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
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
                                    data: sortBySalary(charts['roles_seniority_salary_median'].data),
                                    cutoff: 20,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por rol y años de experiencia en el puesto.',
                                description: <div>
                                    <p>El seniority aquí mencionado refiere a años de experiencia en el rol. Para más detalle ver <a href="#Metodologia">metodología</a>.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> contienen menos de 5 muestras y deben ser tomadas con cuidado.</p>
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
                                    <p>Aquí puede notarse una diferencia en los niveles de salarios que manejan las empresas de Producto basado en software respecto de las otras.</p>
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
                                description: 'Pareciera ser que los cursos de especialización no influyen mucho en los salarios. ¿O sí?',
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
                                    <p>Para este ranking entre carreras solo contamos participantes que las hayan completado. También hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes. Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
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
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
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
                        title: 'Sueldos dolarizados vs. en Pesos Argentinos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['sueldo_dolarizado_salary_median'].data
                                        .map(val => ({
                                            ...val,
                                            name: (val.name === 'True' ? 'Sueldo dolarizado' : 'Sueldo no dolarizado'),
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
                <p>En esta edición la pregunta sobre identidad de género consta de un listado de opciones fijas (que incluye “prefiero no responder”) y la posibilidad de ingresar texto libre. Esta modalidad visibiliza la pluralidad de identidades, no replicando categorías hegemónicas históricamente sostenidas. Por otra parte, se puede lograr un análisis más aproximado a las diferentes vivencias individuales en el cruce de variables. </p>
                <p>Si bien en este apartado mantuvimos la lógica general del informe de no incluir dentro de los gráficos los conjuntos que tuvieron una representación menor al 0.5% de la muestra, mencionamos aquellas identidades de género que están subrepresentadas en esta encuesta, hecho que refleja inequidades por múltiples barreras e injusticias sociales. </p>
                <p>Porcentajes de identidades de género menores al 0,5%: </p>
                <ul>
                    <li>Hombre trans 0,17%</li>
                    <li>Mujer trans 0,16%</li>
                    <li>Agénero 0,02%</li>
                </ul>
                <p>Como es de esperar, las inequidades históricas y sistemáticas por género, se sostienen.</p>

                <h4>Algunos datos</h4>
                <ol>
                    <li>De las personas que participaron de la encuesta y respondieron este ítem, el ~76% son hombres cis, mientras que el ~16,53% son mujeres cis y el 0,66% personas no binaries. </li>
                    <li>Se observa un incremento de participación de 1,5% de mujeres cis con respecto al período anterior.</li>
                    <li>La brecha salarial entre hombres cis y mujeres cis es de 25%, entre hombres cis y personas no binaries de 18,4% y entre hombres cis y personas que prefieren no responder sobre su género de ~3%.</li>
                    <li>Según los datos recabados, la brecha salarial entre hombres cis y mujeres cis se acentúa a medida que aumentan los años de experiencia de la población encuestada, que es donde se encuentra el mayor porcentaje de participación.</li>
                    <li>Es relevante observar que a pesar de encabezar méritos académicos en el conjunto de personas identificadas como mujeres cis la brecha salarial se sostenga en todos los niveles.</li>
                </ol>
            </div>  
        ),
        data: [
            { // sub-category
                title: 'Identidad de género',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: <div>
                                    <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target="_blank" rel="noopener noreferrer" href="http://www.mujeresprogramadoras.com.ar">investigación de Chicas En Tecnología</a> te pueda dar una respuesta.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute'], isPercentual: false },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>
                                   
                                </div>,
                            },
                        ],
                    },

                ],
            },
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Histórico de nivel de participación',
                        data: [
                            {  // tab
                                
                                component: 'Area', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_percent'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.count,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
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
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median'].data
                                            .reduce((dates, row) => ({
                                                ...dates,
                                                [row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]]: {
                                                    publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1],
                                                    ...dates[row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]],
                                                    [row.name.match(/'([\w é]+)'\)$/)[1]]: row.salary,
                                                },
                                            }), {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    currency: 'AR$',
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica de salarios basada en encuestas anteriores.',
                                description: '',
                            }
                            
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
                                    yDataKeys: genders,
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica del nivel de conformidad con los salarios basada en encuestas anteriores.',
                                description: '4 Representa el nivel máximo de conformidad',

                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Formación',
                content: <div>
                    <p>
                        En este apartado segmentamos los niveles de educación formal alcanzados y el grado de completitud de cada uno, por género.
                        Cabe aclarar que excepto para  mujeres cis y hombres cis, tal como se puede ver en el apartado <a href="#Perfil-de-participantes-Demografia">Demografía</a>, el número de muestras es extremadamente reducido, y es muy posible que lo detallado aquí no sea representativo.
                    </p>
                </div>,
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzados y completitud',
                        data: [
                            {  // tab
                                title: 'Hombres Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_hombre_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de los hombres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los hombres encuestados.'
                            },
                            {  // tab
                                title: 'Mujeres Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_mujer_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de las mujeres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los mujeres encuestadas.'
                            },
                            {  // tab
                                title: 'Prefiero No Decir',
                                component: 'Barh', // graph
                                props: { ...charts['education_no_decir_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de personas que prefieren no responder sobre su género, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de otros géneros encuestados.'
                            },
                            {  // tab
                                title: 'No Binarie',
                                component: 'Barh', // graph
                                props: { ...charts['education_no_bin_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de personas no binaries, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de otros géneros encuestados.'
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
                                    yDataKeys: ['Hombre Cis', 'Mujer Cis', 'Prefiero No Decir', 'No Binarie'],
                                    currency: 'AR$',
                                    customStroke: { 'No Binarie': '#ccc' },
                                },
                                caption: 'Mediana salarial por género, según años de experiencia.',
                                description: 'Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci.',
                            },
                        ],
                    },
                    {  // section
                        title: 'Participación por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Mujeres Cis / No Decir / No Binaries',
                                component: 'Area', // graph
                                props: {
                                    data: charts['experience_gender_percent'].data,
                                    xDataKey: 'name',
                                    yDataKeys: ['Mujer Cis', 'Prefiero No Decir', 'No Binarie'],
                                    isPercentual: true,
                                },
                                caption: 'Nivel de participación por género, según años de experiencia. El porcentaje restante es de hombres.',
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
                                    yDataKeys: ['Hombre Cis', 'Mujer Cis', 'Prefiero No Decir', 'No Binarie'],
                                    customStroke: { 'No Binarie': '#ccc' },
                                },
                                caption: 'Conformidad con los salarios por género según años de experiencia.',
                                description: '4 Representa el nivel máximo de conformidad.  Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci.',

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
                                        .sort((a, b) => b['Mujer Cis'] - a['Mujer Cis']),
                                    isPercentual: true,
                                    isLogScale: true,
                                },
                                caption: 'Porcentaje de las distintas identidades de género en cada grupo de sectores de la industria.',
                                description: <p>
                                    También podés ver el <a href="#Trabajo-Caracteristicas-de-las-Empresas-Actividad-Principal-de-la-Empresa">porcentaje de incidencia de cada sector de la industria sobre el total de la población censada</a>.
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
                        title: 'Ajustes por inflación 2021',
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
                                caption: 'Mediana de porcentaje de ajustes por inflación acumulados en el 2021 por género.',
                                description: <>
                                    <p>
                                        Como contraste, la <a href="https://www.indec.gob.ar/uploads/informesdeprensa/ipc_08_21C4CDE45C19.pdf" target="_blank" rel="noopener noreferrer">inflación Enero-Julio publicada por el INDEC en su último reporte</a> fue de <strong>26%</strong>.
                                    </p>
                                    <p>
                                    Aquellas personas que se identifican como hombres cis tienen un 3% más de ajuste que personas identificadas como No Binaries y sobre aquellas que prefieren no responder sobre su género; y un 5% más sobre personas que se identifican como mujeres cis.
                                    </p>
                                </>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Posiciones de liderazgo',
                data: [
                    {  // section
                        title: 'Posiciones de liderazgo abierto por identidad de género',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['leadership_gender_percent'], isPercentual: true },
                                description: <div> Se define posición de liderazgo (Si) la que tiene al menos 1 persona a su cargo. Dejamos expresados los porcentajes de las personas que se reconocen como no binarie: 0.6 % y prefiero no decir 4%.</div>,
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
                    },{
                        title: '¿Qué porcentaje tiene su sueldo dolarizado?',
                        data: [
                            { // tab
                                title: 'Sueldos dolarizados',
                                component: 'Pie',
                                props: {
                                    data: charts['sueldo_dolarizado_percent'].data.map(val => ({
                                        ...val,
                                        name: (val.name === 'True' ? 'Sueldo dolarizado' : 'Sueldo no dolarizado'),
                                    })),
                                    isPercentual: true,
                                },
                                caption: <p>Porcentaje de personas que tienen su sueldo dolarizado, y quienes no lo tienen.</p>,
                                description: <p>disminuyó 2% respecto a 2021.01 <a target="_blank" rel="noopener noreferrer" href="(https://sueldos.openqube.io/encuesta-sueldos-2021.01/#Trabajo-Tipos-de-contrato-Que-porcentaje-tiene-su-sueldo-dolarizado">respecto al reporte pasado</a>.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Distribución del top 10 mejor pago',
                        data: [
                            {  // tab
                                title: 'Actividad principal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['salary_by_role_top10_perc'].data,
                                    isPercentual: false,
                                    isLogScale: false,
                                },
                                caption: 'Para este análisis nos quedamos con el top 10% de los salarios más altos. Esto responde la pregunta de ¿Cuánto ganan los que más ganan por rol?, los valores de la mediana son expresados en Pesos Argentinos',
                                description:'Como llama la atención que "QA / Tester" y "Developer" estén en los mas altos, se abre por cada rol la cantidad de casos que hay, tomando como mínimo 5, y mostrando el porcentaje de personas que tienen el sueldo dolarizado (% dolarizado en el grafico). Justamente, estos roles son los que poseen más sueldos en dólares, lo que es llamativo si se compara con los puestos de liderazgo C-Level, PM, PL, TL entre otros.'
                            },
                        ],
                    },
                    
                ],
            }, 
            { // sub-category
                title: 'Compensación',
                data: [
                    {  // section
                        title: '¿Recibís algún tipo de bono?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['recibis_algun_tipo_de_bono'], isLogScale: true, isPercentual: true },
                                caption:<p>Porcentaje de participantes que han recibido o no, bonos como parte de la compensación, en escala logarítimica, el <strong>
                                {parseFloat(charts['recibe_algun_tipo_de_bono'].data.map(item => item.value)*100).toFixed(2)}</strong> % de los encuestados reciben algún tipo de bono</p>
                            
                            },
                        ],
                    },
                    {  // section
                        title: '¿Tenés beneficios extra?',
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
                        title: 'Porcentajes de Ajuste por Inflación a la fecha (2021)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['de_que_fue_el_ajuste'], isPercentual: true },
                                caption: <div>
                                    <p>Los rangos (eje vertical) representan el porcentaje de ajuste o aumento por inflación recibido en el año. La longitud de las barras representa el porcentaje de encuestados que recibieron ajustes dentro de ese rango.</p>
                                </div>,
                                description:'El 27% de los encuestados, no tuvo ajuste salarial en los últimos 6 meses, Inflación Marzo - Agosto: 21.4% (Agosto se estima en 3%)'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Características de las Empresas',
                data: [
                    {  // section
                        title: 'Cantidad de Personas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['cantidad_de_personas_en_tu_organizacion'], isPercentual: true },
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

                    {  // section
                        title: 'De existir ¿Cómo calificás las políticas de diversidad e inclusión de tu empresa?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['politicas_diversidad_e_inclusion'], isPercentual: true },
                                description: (<span>
                                    Un 72.5% considera que las políticas de inclusión son buenas, muy buenas o excelentes. Este valor se redujo con respecto al anterior (85%).
                                </span>),
                            },
                        ],
                    },
                    {  // section
                        title: '¿Presenciaste una situación de violencia laboral?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_laboral_violence'], isPercentual: true },
                                description: (<span>
                                 Casi un 31% de las personas encuestadas presenció una situación de violencia laboral en un trabajo previo y un 8% lo hizo en su trabajo actual.
                                 El <strong>{parseFloat(charts['demographics_laboral_violence_ever'].data.map(item => item.value)*100).toFixed(1)}</strong>%   indicó que fueron testigos de violencia laboral alguna vez.
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
                    Para otros segmentos, simplemente hicimos un corte sobre los resultados más frecuentes (rankings).  Con esto aseguramos también que los datos presentados sean relevantes para un análisis.
                </p>
                <h4>Salarios</h4>
                <p>
                    Para los valores de los salarios aquí expuestos, ya sea por período, por género, experiencia, etc. utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Mediana_(estad%C3%ADstica)">mediana</a> del salario bruto.
                    Este valor, si bien se aproxima al promedio de una muestra, no es exactamente eso. La mediana salarial, nos sirve mejor para entender mejor cual es el valor típico de una muestra.
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
                    Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina">salario mínimo</a>. Tanto para la más reciente encuesta como para las anteriores.
                </p>
                <h5>Cotización del dólar</h5>
                <p>
                    Para el cálculo de salarios dolarizados, tomamos la cotización intradiaria promedio de Bloomberg y tomamos la mediana del valor del día de publicación con un delta de 5 días.
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
                    En la encuesta algunos campos tales como <i>nombre de la carrera universitaria</i>, <i>nombre de la Universidad</i> y <i>rol</i>, además de presentar opciones predefinidas, también permiten texto libre (otros).
                    Esto conlleva a una mayor dispersión de valores, dado que cada participante contesta de maneras distintas:
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
                    Como mejora al relevamiento anterior, hemos además provisto durante la encuesta 2021.01, todos los valores más relevantes normalizados como resultado del análisis 2021.02.
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
                
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos">Acá encontraran toda la información para recrear los análisis, los google colab de Python utilizados, y los datos tanto los originales como los limpios para que puedan replicar y realizar nuevos análisis.</a>
                    
                
                <h4>Análisis previos</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.01">Resultados de la encuesta de sueldos 2019.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.02">Resultados de la encuesta de sueldos 2019.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.01">Resultados de la encuesta de sueldos 2020.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.02">Resultados de la encuesta de sueldos 2020.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/">Resultados de la encuesta de sueldos 2021.01</a></li>
                    
                </ul>
            </div>
        )
    }
];

