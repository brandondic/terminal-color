// Importamos la librería chalk
import chalk from 'chalk';

// Mensajes iniciales
console.log(chalk.blue('👋 ¡Bienvenido a la Terminal Parlante!'));
console.info(chalk.green('ℹ️ Esta terminal está viva... y tiene estilo.'));
console.warn(chalk.yellow('⚠️ Atención: Esto puede ponerse colorido.'));
console.error(chalk.red('❌ Error simulado: algo salió demasiado bien.'));
console.log(chalk.magenta('💡 Recuerda: la práctica hace al programador.'));

// BONUS: función básica
function saludar(nombre) {
    console.log(chalk.cyan(`Hola ${nombre}, ¡bienvenido al mundo JavaScript! 🌍`));
}

// Prueba de función
saludar("Equipo JS");

// Función simularError
function simularError() {
    console.log('')
    console.log(chalk.bgYellow.white.bold('Estamos Presentando Errores'));
    console.warn(chalk.yellow('⚠️ Advertencia: algo sospechoso está ocurriendo...'));
    console.error(chalk.red('❌ Error crítico: el sistema encontró un problema grave.'));
    console.log(chalk.green('✅ Recuperación exitosa: el sistema volvió a la normalidad.'));
}

// Llamada a la función
simularError();