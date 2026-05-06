// Importamos la librería chalk
import chalk from 'chalk';

// --- NUEVA FUNCIÓN: mostrarEstado ---
function mostrarEstado(fase) {
    switch (fase) {
        case 'inicio':
            console.log(chalk.bgBlue.white.bold(' START ') + chalk.blue(' Iniciando el motor del programa...'));
            break;
        case 'proceso':
            console.warn(chalk.yellow('⏳ Procesando datos en segundo plano...'));
            break;
        case 'fin':
            console.info(chalk.black.bgGreen(' SUCCESS ') + chalk.green(' ¡El proceso ha finalizado con éxito!'));
            break;
        default:
            console.error(chalk.red.underline('Error: Estado no reconocido.'));
    }
}

// --- EJECUCIÓN DEL PROGRAMA ---

mostrarEstado('inicio'); // Llamada al inicio

// Mensajes originales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));

mostrarEstado('proceso'); // Llamada durante el proceso

console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// Función de saludo
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

saludar("Equipo JS");

mostrarEstado('fin'); // Llamada al finalizar