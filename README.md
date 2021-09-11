
## Edición 2021.02 (2021 - 2do semestre).

<img src='https://sysarmy.com/blog/assets/carpincho.jpg' width="300px">

_Carpincho edition_

<br>

### Acerca del análisis

El objetivo es poder analizar los salarios del mundo IT de Argentina, así como su evolución a lo largo del tiempo, cruzado por distintas variables como las de género, demográficas, entre otras.

Para ello se analizó la información utilizando Python en Google Colab, por lo cual los informes son 100% reproducibles en el navegador. La información se muestra en un sitio web hecho en react.

TODO: **Sitio web con los resultados**:

### Acerca de los datos

Los datos se dividen en _no históricos_ e _históricos_. 

- Los datos _no históricos_ son los usados para medir el último período de análisis (julio-agosto 2021).

- Los _históricos_ contienen algunas de las variables que se miden a lo largo del tiempo.

<br>

## Links importantes

### 💻 Google colabs utilizados:

- [No histórico](https://colab.research.google.com/drive/1vXLMvOYTQxp1qque29Fy8e5z-04jJOBI#sxcrollTo=X752yKSDj45j)

Este colab limpia los datos y calcula los datos para luego enviarlos por json a la página web en react. 

**Si el lector quiere analizar los datos para crear sus propios análisis basandose en el dataset limpio**, según los criterios mostrados en el colab, entonces puede usar utilizar el dataset: `No histórico CLEAN` de la siguiente sección.


- [Histórico](https://colab.research.google.com/drive/10e5hZytlMatMuKmLCRo9YzpS1O9EbeV2#scrollTo=Pc5mUvyozCQ5)


Si querés analizar la encuesta y no sabes Python, te invitamos a hacer el: [Curso Python básico y gratuito](https://escueladedatosvivos.ai/p/curso-gratuito-introductorio-a-python). 
_Disclaimer: Pertence al equipo de análisis de esta edición._


### 🗃 Datasets listos para analizar

- [No historico CLEAN](https://docs.google.com/spreadsheets/d/1x-Lhp3NJJCQom3nijfu8fublQ5Ui1ZOiCy5DxagKz9M/edit?usp=sharing)

Datos limpios / pre-procesados.

- TODO: poner `no histórico` sin procesar cuando lo suban a github.

Datos sin pre-procesar, tal como vienen de la encuesta realizada.

- [Historico](https://docs.google.com/spreadsheets/d/1tUZ4kQUm-66tENFL7qF0GmgoxJ9a4qU8yqyF3uyHsto/edit?usp=sharing) 

Datos con contenido de otras encuestas para medir la evolución. Sólo se consideran algunas variables. 





<br>

####	Valor del dólar oficial, ahorro y blue 💸 ☁️

-	**Dólar oficial**: www.bloomberg.com ([link query](https://www.bloomberg.com/markets/api/bulk-time-series/price/USDARS%3ACUR?timeFrame=5_YEAR))

-	**Dólar ahorro**: Se hace un cálculo directamente en front-end en base al dólar oficial. Verificar ese apartado para más detalles.

-	**Dólar Blue**: Obtuvimos la cotización desde www.bluelytics.com.ar ([link api](https://api.bluelytics.com.ar/v2/evolution.csv))


Ver más detalles sobre el dólar en [README_backend](README_backend.md)

<br>

### Errores

<img src="https://c.tenor.com/PRN-EHOCuHwAAAAd/the-it-crowd-moss-the-it-crowd.gif" width="300px">

Si detectas un error, omisión u otro problema, y reiniciar la computadora no funcionó, por favor carga un issue en el repo.

<br>

---

## Reproducibilidad

Esta sección contiene los links a la documentación con las consideraciones necesarias para que pueda mantenerse consistentemente el proyecto en el tiempo. Se incluye el procedimiento de:

- Backend en `Python`, procesar archivos nuevos, consideraciones con datos históricos, etc: [README_frontend](README_frontend.md)

- Frontend en `React`, despliegue del sitio y visualización de gráficos): [README_backend](README_backend.md)



---

<br>

## About

El presente informe fue realizado para Openqube por [Leonardo Genzano](https://ar.linkedin.com/in/leonardo-genzano-1b275193/) (Python developer) y [Nico Quiroz](https://twitter.com/cocodibuja) (frontend) y [Pablo Casas](https://twitter.com/pabloc_ds) (Líder de proyecto), de [Escuela de Datos Vivos](https://escueladedatosvivos.ai).

Basado en el trabajo previo de [Nadia Kazlauskas](https://www.linkedin.com/in/nadiakazlauskas/), [Pablo Fernandez](https://www.linkedin.com/in/fernandezpablo85/), [Luciana Castro](https://twitter.com/luscastro) y [Gerardo Bort](https://twitter.com/gerardobort).



