// Importamos la librería chalk
import chalk from 'chalk';

const tiempo = ms => new Promise(res => setTimeout(res, ms));
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

// Función de cargando animado
async function cargando(mensaje, duracion) {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    const intervalo = setInterval(() => {
        process.stdout.write(`\r${chalk.cyan(frames[i])} ${chalk.dim(mensaje)}`);
        i = (i + 1) % frames.length;
    }, 100);

    await tiempo(duracion);
    clearInterval(intervalo);
    process.stdout.write('\r' + ' '.repeat(mensaje.length + 5) + '\r'); // limpia la línea
}

// Función simularError
async function simularError() {

    console.log('');

    await cargando('Escaneando archivos del sistema...', 2000);
    console.log(chalk.bgRed.white.bold('  🚨 ¡ALERTA! Se detectaron Errores en el Sistema  '));

    console.log('');
    await tiempo(500);

    await cargando('Analizando el problema...', 2000);
    console.warn(chalk.yellow('⚠️  Advertencia: Un proceso está consumiendo demasiada memoria.'));
    console.warn(chalk.yellow('⚠️  Advertencia: Conexión inestable detectada en el puerto 8080.'));

    console.log('');
    await tiempo(500);

    await cargando('Registrando error crítico...', 2000);
    console.error(chalk.bold.red('❌ ERROR CRÍTICO: El servidor principal no responde.'));
    console.error(chalk.red('   → Código de error: 0x000DEAD'));
    console.error(chalk.red('   → Módulo afectado: core.system.exe'));

    console.log('');
    await tiempo(500);

    await cargando('Aplicando protocolo de recuperación...', 2500);
    console.log(chalk.green('🔧 Reiniciando módulos afectados...'));
    await tiempo(800);
    console.log(chalk.green('🔧 Restaurando conexiones...'));
    await tiempo(800);
    console.log(chalk.bold.green('✅ Sistema recuperado exitosamente.'));

    console.log('');
}



