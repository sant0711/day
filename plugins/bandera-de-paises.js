// Mapeo de usuarios a países
const userCountries = {
    '@juan': '🇲🇽',  // México
    '@maria': '🇨🇴',  // Colombia
    '@carlos': '🇦🇷',  // Argentina
    '@ana': '🇪🇸',    // España
    '@pedro': '🇵🇪',   // Perú
    // Añadir más usuarios según sea necesario
  };
  
  function processMentionsWithFlags(message) {
    // Buscar menciones que empiecen con @
    const mentionRegex = /@\w+/g;
    
    // Reemplazar cada mención con la mención + bandera
    return message.replace(mentionRegex, (mention) => {
      const flag = userCountries[mention] || '🏳'; // Bandera default si no se encuentra el país
      return ${mention} ${flag};
    });
  }
  
  // Evento del bot cuando recibe un mensaje
  function onMessage(message) {
    if (message.body) {
      const processedMessage = processMentionsWithFlags(message.body);
      
      // Si el mensaje fue modificado, enviar la versión con banderas
      if (processedMessage !== message.body) {
        return {
          text: processedMessage
        };
      }
    }
    return null; // No modificar mensajes sin menciones
  }