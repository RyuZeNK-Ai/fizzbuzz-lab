<h1 align="center">🧮 FizzBuzz Lab — Tareas 1 a 7 🧮</h1>

Este proyecto contiene una serie de ejercicios progresivos para practicar **lógica de programación** en JavaScript utilizando Node.js.  
A través de estas tareas se trabajan bucles, condicionales, entrada por consola, arreglos y detección de números primos.

<div align="center">

<table>
<tr>
<td>

## 👥 Equipo Q-ERO v3 Protocol

- Washington Mardones
- Agustín Valenzuela
- Karim Valenzuela  
- Javier Valenzuela   
- Anita Morales  
- Nicolás Peña 


</td>
<td align="center" valign="middle" width="320">
  <img src="./images/logo_Q-ERO.png" alt="Logo Q-ERO v3 Protocol" width="270">
</td>
</tr>
</table>

</div>

## 🚀 Ejecución

Para ejecutar cualquier tarea:

```bash
node index.js <número_de_tarea>
```

Ejemplo:

```bash
node index.js 4
```

Si no ingresas un número, el programa te lo pedirá por consola.

## 📂 Contenido de las Tareas

| Tarea | Descripción | Archivo |
|------|-------------|---------|
| **1** | Imprimir los números del 1 al 105 | `task1.js` |
| **2** | Reemplazar múltiplos de 3 con **"Fizz"** | `task2.js` |
| **3** | Agregar **"Buzz"** y **"FizzBuzz"** usando múltiplos de 5 y 3/5 | `task3.js` |
| **4** | Agregar **"Woof"** para múltiplos de 7, respetando orden **Fizz → Buzz → Woof** | `task4.js` |
| **5** | Pedir al usuario hasta qué número generar la secuencia (`prompt-sync`) | `task5.js` |
| **6** | Guardar los resultados en un arreglo y mostrar el total | `task6.js` |
| **7** | Detectar números **primos** y reemplazarlos con palabras del arreglo `buzzWords` | `task7.js` |

## 🧠 Conceptos Trabajados

- Bucles `for`
- Operador módulo `%`
- Condicionales `if / else`
- Concatenación de strings para construir salidas dinámicas
- Entrada por consola con `prompt-sync`
- Arreglos y método `.push()`
- Detección de números primos con bucles anidados
- Selección de palabras usando índice dinámico:
  ```
  buzzWords[i % buzzWords.length]
  ```

## 📌 Ejemplo de salida (Tarea 7)

Entrada:

```
Ingrese hasta qué número desea generar (1 - 105): 10
```

Salida:

```
🎉 Resultados finales:
[
  1,      'Woof', 'Fizz',
  4,      'Buzz', 'Fizz',
  'Woof', 8,      'Fizz',
  'Buzz'
]

🔢 Total de elementos: 10
```

## 🔧 Dependencias

Instalar `prompt-sync`:

```bash
npm install prompt-sync
```

## 🧑‍💻 Autor: **RyuZeNK.Ai**   
