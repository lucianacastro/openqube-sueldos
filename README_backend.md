# Análisis de la encuesta Sysarmy
## Edición 2021.02 (2021 - 2do semestre).

## Consideraciones para reproducir los datos en Colab

En caso que el lector requiera replicar los resultados, o crear un nuevo análisis para las futuras encuestas, se plantean consideraciones útiles para caso set de datos.

### Reproducibilidad Datos Históricos

#### *Caso 1: Dataset en el repositorio*

Si los datos ya están subidos en el mismo repositorio que los anteriores datasets, no habría que hacer grandes cambios ya que la celda “1.2. Iteramos los metadatos por dataset y cargamos los valores del repositorio” lo hace automáticamente. Tener en cuenta que hay que agregar a la celda de metadatos, los metadatos correspondientes al set nuevo.<br />

```
   {
        "year": 2021,
        "part": 2,
        "skiprows": 0,
        "publish_date": "2021-08-23",   
        "minimum_salary": 16875,
        "src": [
            "Salario mensual BRUTO (en tu moneda local)",
            "Salario mensual BRUTO (en tu moneda local)",
            "Dónde estás trabajando",
            "Tengo",
            "Años de experiencia",
            "Años en el puesto actual",
            "Trabajo de",
            "Me identifico",
            "¿Qué tan conforme estás con tu sueldo?",
        ],
   }
```

### *Caso 2: Dataset no incluido en el repositorio* 

Si los datos estén en un .csv local, primero hay que subir el archivo  a Google Drive y luego importarlo desde el notebook.

</br>


```
data202102 = pd.read_csv("/content/drive/MyDrive/Colab Notebooks/encuesta_sysarmy/[Final] Encuesta de remuneración salarial - 2021.2 v2 (Responses) - Form Responses 1.csv", 
                            skiprows=0,
                            thousands=".",
                            decimal=",",)
```

#### Consideraciones para cargar los datos nuevos en el caso 2:
1. Tomar en cuenta solamente a aquellas columnas que se van a utilizar en el análisis histórico (salario, experiencia, lugar de trabajo, edad, años en el puesto actual, identidad de género, conformidad de salario).

```
data202102 = data202102[['Salario mensual o retiro BRUTO (en tu moneda local)','Años de experiencia','Dónde estás trabajando','Tengo','Años en el puesto actual','Trabajo de','Me identifico','¿Qué tan conforme estás con tu sueldo?']]
data202102 = data202102.rename(columns={"Salario mensual o retiro BRUTO (en tu moneda local)": "salary", "Años de experiencia": "yoe",'Dónde estás trabajando':'location','Tengo':'age','Años en el puesto actual':'yip','Trabajo de':'role','Me identifico':'gender','¿Qué tan conforme estás con tu sueldo?':'acquiescence'})
```

2.	Hacer las mismas transformaciones que se hagan en el notebook no histórico, para que la integridad y formato de los datos sea idéntico en ambos análisis.

```
data202102.loc[:, "_sal"] = data202102[
    "salary"
]
data202102["salary"] = (
    data202102["_sal"]
    .str.replace(".", "")
    .str.replace(",", ".")
    .str.replace("$", "")
    .str.replace(r"[^0-9\.]", "")
    .str.replace(r"^\s*$", "0")
    .fillna(0)
    .astype(float)
)
```

3.	Variables `salary_type`, `part`, y `publish_date` van a ser fijos y deben definirse a mano. Estas variables en los sets de datos anteriores (es decir, los que ya están en el repositorio) vienen definidas por los metadatos en la celda _1.1. Definición de metadata por dataset que define la forma de unir los diferentes conjuntos de datos_.

```
#creamos las columnas que faltan (metadatos)
data202102['salary_type'] = data202102['salary']
data202102['part'] = 2
data202102['publish_date'] = "2021-08-23"

#reordenamos
data202102 = data202102[["salary","salary_type", "location", "age","yoe","yip","role","gender","acquiescence","part","publish_date"]]
```

4.	Verificar que los datatypes coincidan con los de los sets anteriores (todas las columnas object excepto ‘publish_date’ que es datetime64).

```
#cambiamos tipos de datos para que coincidan con los datos de antes (menos salario que lo cambio en la celda de abajo)
data202102[["salary_type", "location", "age","yoe","yip","role","gender","acquiescence","publish_date"]] = data202102[["salary_type", "location", "age","yoe","yip","role","gender","acquiescence","publish_date"]].astype('object')
data202102['publish_date'] = data202102['publish_date'].astype('datetime64') 
```

5.	Una vez se tenga el set de datos normalizado correctamente, combinarlo con el dataframe general (combined_dataframe) que ya viene definido de antes (tiene la combinación de todos los sets de datos)

```
#unimos el dataframe combinado de años anteriores, a los nuevos datos de 2021.02
combined_dataframe = combined_dataframe.append(data202102)
```

6.	El proceso luego es el mismo, ya que el combined_dataframe no tiene nuevas columnas sino nuevos registros. 
Nota: se agrega una celda para redefinir los metadatos que se hizo al inicio del notebook. Es la misma celda pero se adiciona  al diccionario la entrada correspondiente a los metadaots del set 2021.02. Esto no se agrega en la del comienzo ya que la función que se utiliza luego para tomar los datos del repositorio falla al no encontrar el set más nuevo. Una vez estén todos los datasets en el repositorio, eliminar esta celda.

![Celda de metadatos](https://i.ibb.co/MgBZHqs/Captura.png)

</br>

#### Valor del dólar oficial, ahorro y blue

-	**Dólar oficial**: Se importa un json ([link](https://www.bloomberg.com/markets/api/bulk-time-series/price/USDARS%3ACUR?timeFrame=5_YEAR)) con el histórico de cotizaciones, que tiene datos de 5 años (hasta la fecha actual). 
Para adicionar datos anteriores a 5 años, unimos el json de Bloomberg con el que ya venia en el notebook de ediciones anteriores, que trae datos hasta 2012 ([link](https://raw.githubusercontent.com/openqube/openqube-sueldos/release/2020.02/data/currency-2020.02.json)).
Esa unión de jsons se subió a Google Drive para importarla directamente desde Colab.

-	**Dólar ahorro**: Se hace un cálculo directamente en front-end en base al dólar oficial. Verificar ese apartado para más detalles.

-	**Dólar Blue**: Obtuvimos la cotización desde www.bluelytics.com.ar ([link api](https://api.bluelytics.com.ar/v2/evolution.csv))

Seleccionar solo las columnas que nos importen (las mismas que tiene el json de dólar oficial), que son fecha y valor de compra.

Filtrar por Tipo: blue y fecha:2016-08-01 (es decir, desde el comienzo de las encuestas)

Luego el código es el mismo que para el dólar oficial, se obtiene la mediana por período, pero aplicando el valor de conversión del blue.

Código: 

```
dolar_blue = pd.read_csv("/content/drive/MyDrive/Colab Notebooks/encuesta_sysarmy/evolution.csv")
dolar_blue =  dolar_blue[dolar_blue['type']=='Blue']
dolar_blue =  dolar_blue[dolar_blue['day']>='2016-08-01'] #filtramos la fecha desde el comienzo de las encuestas
dolar_blue = dolar_blue[['day','value_buy']]
dolar_blue = dolar_blue.rename(columns={'day': "date",'value_buy':'value'})
```

Nota: El archivo `evolution.csv` esta dentro de la carpeta `data` de este repo.




