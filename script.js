// ===============================
// sistema_interactivo.js
// Programa interactivo básico
// ===============================

// --- TASK 1: Configuración inicial ---
// Este programa solicita nombre y edad al usuario,
// valida la edad y muestra mensajes dinámicos.
// Se usan buenas prácticas: let/const, camelCase y comentarios.

// --- TASK 2: Entrada de datos del usuario ---
// Solicitamos el nombre del usuario
const userName = prompt("Ingresa tu nombre:");


// Solicitamos la edad del usuario
const userAgeInput = prompt("Ingresa tu edad:");

// Convertimos la edad a número
let userAge = Number(userAgeInput);

// --- TASK 3: Validación de la edad ---
// Verificamos si la edad ingresada es un número válido
if (isNaN(userAge)) {
  console.error("Error: Por favor, ingresa una edad válida en números.");
} else {

  // --- TASK 4: Condicionales y mensajes dinámicos ---
  // Evaluamos si el usuario es menor o mayor de edad

  if (userAge < 18) {
    const message = `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    console.log(message);
    alert(message);
  } else {
    const message = `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    console.log(message);
    alert(message);
  }
}

// ===============================
// Nota para Node.js:
// prompt() y alert() no existen en Node por defecto.
// Puedes usar la librería "prompt-sync" si quieres probar en consola.
// ===============================
