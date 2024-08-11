# Advent JS - 2023

En este repositorio estaré subiendo mi resolución a los retos del AdventJS 2023, además de los tests que fueron empleados para comprobar la solución a cada uno de los ejercicios implementados tanto en JavaScript como en TypeScript.

Si quieres practicar y resolver los retos por tu cuenta, entra a [Advent JS](https://adventjs.dev/es)

![Advent JS 2023](assets/background.png)

## <img src="https://adventjs.dev/android-icon-192x192.png" width="20" height="20" /> <strong> [AdventJS](https://adventjs.dev/es) es una iniciativa de [@midudev](https://midu.dev/)</strong>

## Retos
---

| Reto  | Titulo    | Solución  | Dificultad[^1]    |
| ----- | --------- | --------- | ----------------- |
| #01   | [¡Primer regalo repetido!](https://adventjs.dev/es/challenges/2023/1) | [Ver Solución](./src/challenge-01/) | 🟢 |
| #02   | [Ponemos en marcha la fabrica](https://adventjs.dev/es/challenges/2023/2) | [Ver Solución](./src/challenge-02/) | 🟢 |
| #03   | [El elfo travieso](https://adventjs.dev/es/challenges/2023/3) | [Ver Solución](./src/challenge-03/) | 🟢 |
| #04   | [Dale vuelta a los paréntesis](https://adventjs.dev/es/challenges/2023/4) | [Ver Solución](./src/challenge-04/) | 🟠 |
| #05   | [El CyberTruck de Santa](https://adventjs.dev/es/challenges/2023/5) | [Ver Solución](./src/challenge-05/) | 🟠 |
| #06   | [Los renos a prueba](https://adventjs.dev/es/challenges/2023/6) | [Ver Solución](./src/challenge-06/) | 🟢 |
| #07   | [Las cajas en 3D](https://adventjs.dev/es/challenges/2023/7) | [Ver Solución](./src/challenge-07/) | 🟢 |
| #08   | [Ordenando el almacén](https://adventjs.dev/es/challenges/2023/8) | [Ver Solución](./src/challenge-08/) | 🟠 |
| #09   | [Alterna las luces](https://adventjs.dev/es/challenges/2023/9) | [Ver Solución](./src/challenge-09/) | 🟢 |
| #10   | [Crea tu propio árbol de navidad](https://adventjs.dev/es/challenges/2023/10) | [Ver Solución](./src/challenge-10/) | 🟢 |
| #11   | [Los elfos estudiosos](https://adventjs.dev/es/challenges/2023/11) | [Ver Solución](./src/challenge-11/) | 🟠 |
| #12   | [¿Es una copia válida?](https://adventjs.dev/es/challenges/2023/12) | [Ver Solución](./src/challenge-12/) | 🟠 |
| #13   | [Calculando el tiempo](https://adventjs.dev/es/challenges/2023/13) | [Ver Solución](./src/challenge-13/) | 🟢 |
| #14   | [Evita la alarma](https://adventjs.dev/es/challenges/2023/14) | [Ver Solución](./src/challenge-14/) | 🟠 |
| #15   | [Robot autónomo](https://adventjs.dev/es/challenges/2023/15) | [Ver Solución](./src/challenge-15/) | 🟠 |
| #16   | [Despliegue en viernes](https://adventjs.dev/es/challenges/2023/16) | [Ver Solución](./src/challenge-16/) | 🟢 |
| #17   | [Optimizando el alquiler](https://adventjs.dev/es/challenges/2023/17) | [Ver Solución](./src/challenge-17/) | 🟢 |
| #18   | [El reloj digital](https://adventjs.dev/es/challenges/2023/18) | [Ver Solución](./src/challenge-18/) | 🔴 |
| #19   | [Enfrenta el sabotaje](https://adventjs.dev/es/challenges/2023/19) | [Ver Solución](./src/challenge-19/) | 🟠 |
| #20   | [Distribuye el peso](https://adventjs.dev/es/challenges/2023/20) | [Ver Solución](./src/challenge-20/) | 🔴 |
| #21   | [Mensaje binario](https://adventjs.dev/es/challenges/2023/21) | [Ver Solución](./src/challenge-21/) | 🟠 |
| #22   | [Lenguaje de programación](https://adventjs.dev/es/challenges/2023/22) | [Ver Solución](./src/challenge-22/) | 🟢 |
| #23   | [La comida de Navidad](https://adventjs.dev/es/challenges/2023/23) | [Ver Solución](./src/challenge-23/) | 🟢 |
| #24   | [Brincos en la escalera](https://adventjs.dev/es/challenges/2023/24) | [Ver Solución](./src/challenge-24/) | 🟠 |
| #25   | [Calculando distancias](https://adventjs.dev/es/challenges/2023/25) | [Ver Solución](./src/challenge-25/) | 🟠 |

[^1]: **Dificultad**: 🟢 Fácil 🟠 Media 🔴 Difícil 🟣 Muy Difícil

## Instalación

Clona este repositorio usando:

```bash
git clone https://github.com/chicho69-cesar/adventJS-2023.git
```

Instala Jest para realizar los tests de los retos:

```bash
npm install jest, @types/jest
```

## Tests

Puedes comprobar todos los tests de los retos usando el comando:

```bash
npm run jest
```

O También puedes ejecutar los siguientes comandos, para ejecutar tanto todos los tests como los tests individuales de cada reto:

```bash
npm run test # Para correr todos los test de todos los retos
npm run test:n # n siendo el numero del reto, por ejemplo
npm run test:1 # Correrá el test del reto 1
```
