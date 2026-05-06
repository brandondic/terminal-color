// Importamos la librería chalk
import chalk from 'chalk';

// --- EJECUCIÓN DEL PROGRAMA ---

// Llamada al inicio
mostrarEstado('inicio'); 

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// Llamada durante el proceso
mostrarEstado('proceso'); 

// Prueba de función
saludar("Equipo JS");

// Llamada al finalizar
mostrarEstado('fin'); 

// Llamada a la función Error
simularError();

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

// Función de saludo
function saludar(nombre) {
  console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Función simularError
function simularError() {
    console.log('')
    console.log(chalk.bgYellow.white.bold('Estamos Presentando Errores'));
    console.warn(chalk.yellow('⚠️ Advertencia: algo sospechoso está ocurriendo...'));
    console.error(chalk.red('❌ Error crítico: el sistema encontró un problema grave.'));
    console.log(chalk.green('✅ Recuperación exitosa: el sistema volvió a la normalidad.'));
}


