# Conceptos importantes para entender el asincronismo:

- 馃У Thread: Thread para Javascript permite realizar programaci贸n multihilos en este entorno. En realidad, simula la creaci贸n y ejecuci贸n de hilos, pero para el desarrollador es lo mismo. 脡sto simplifica much铆simo la creaci贸n de aplicaciones Javascript.

- 馃毇 Bloqueante: Una llamada u operaci贸n bloqueante no devuelve el control a la aplicaci贸n hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.

- 馃毧 No bloqueante: Una tarea no bloqueante se devuelve inmediatamente con independencia del resultado. Si se complet贸, devuelve los datos. Si no, un error.

- 馃帪锔? S铆ncrono: Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

- 馃殾 As铆ncrono: Las tareas pueden ser realizadas m谩s tarde, lo que hace posible que una respuesta sea procesada en diferido. La finalizaci贸n de la operaci贸n I/O (entrada/salida) se se帽aliza m谩s tarde, mediante un mecanismo espec铆fico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.

- 馃洡锔? Paralelismo: El paralelismo es la ejecuci贸n simult谩nea de dos o m谩s tareas. Algunas tareas se pueden dividir en partes m谩s peque帽as que pueden ser resueltas simult谩neamente.

- 馃幃 Concurrencia: La concurrencia es la capacidad de un algoritmo o programa para ejecutar m谩s de una tarea a la vez. El concepto es similar al procesamiento paralelo, pero con la posibilidad de que muchos trabajos independientes hagan diferentes cosas a la vez en lugar de ejecutar el mismo trabajo.

- 馃寑 Eventloop o Loop de eventos: El bucle de eventos es un patr贸n de dise帽o que espera y distribuye eventos o mensajes en un programa.

## 馃摑 Formas de manejar la asincron铆a en JavaScript:**

-  Callbacks: Una funci贸n que se pasa como argumento de otra funci贸n y que ser谩 invocada.
-  Promesas: (implementado en ES6) Una promesa es una funci贸n no-bloqueante y as铆ncrona la cual puede retornar un valor ahora, en el futuro o nunca.
-  Async / Await: (implementado en ES2017) Permite estructurar una funci贸n asincr贸nica sin bloqueo de una manera similar a una funci贸n sincr贸nica ordinaria.

馃搶 En JavaScript casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como as铆ncronismo. Lo 煤nico que no es procesado antes de que termine la operaci贸n son los callbacks, ya que 茅stos est谩n amarrados a una operaci贸n y esperan a que sea finalizada para poder ejecutarse.

鈴? El asincronismo es una manera de aprovechar el tiempo y los recursos de la aplicaci贸n, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la informaci贸n de una API), para posteriormente continuar con las tareas que requer铆an esa informaci贸n que no ten铆as de manera instant谩nea.

鈴诧笍 Un ejemplo f谩cil de asincronismo vs sincronismo es invitar a unos amigos a una fiesta y ofrecer una parrillada. Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar (snacks). Si fuera una persona s铆ncrona (Blocking) tendr铆as que esperar a que la comida de la parrilla est茅 cocinada y luego atender a los invitados. Pero si fuera una persona as铆ncrona (Non Blocking) luego de poner la carne al carb贸n, sacas las bebidas fr铆as de la nevera y compartes con los invitados mientras se cocina la carne. La acci贸n de que la comida en la parrillada est茅 lista ser铆a un callback que est谩 esperando que finalice el proceso para ejecutarse. Pero otros procesos (como compartir la velada con bebidas y algo de picar) ya podr铆an irse realizando.