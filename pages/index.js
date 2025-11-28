function Home() {
  // Post ID do GIF "Gato Teclado Trabalhando"
  const tenorGifId = "10688971139362782124";
  const gifUrl = `https://tenor.com/embed/${tenorGifId}`;

  return (
    // Container principal minimalista, usando classes Tailwind para centralização e estilo
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center font-sans text-gray-800 lowercase">
      {/* GIF do Tenor (150x150) */}
      <div className="mb-8 w-[150px] h-[150px] mx-auto">
        <iframe
          src={gifUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="gato teclado trabalhando gif"
          className="rounded-sm"
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl font-light mb-4 tracking-tight">em construção</h1>

      {/* Conteúdo Principal */}
      <p className="text-base max-w-sm mb-2">
        este será o meu portifólio minimalista, construído enquanto aprendo a
        programar.
      </p>

      <p className="text-base max-w-sm mb-6">
        por enquanto, estou usando este espaço para mensagens simples.
      </p>

      {/* Mensagem Especial para a Namorada (Destacada) */}
      <div className="p-3 bg-red-100 border border-red-300 rounded-lg max-w-xs mx-auto">
        <p className="text-lg text-red-700 font-medium">
          mensagem de hoje: ei amor! eu te amo ❤️
        </p>
      </div>

      {/* Rodapé */}
      <p className="mt-8 text-sm text-gray-500">
        voltaremos em breve com novidades.
      </p>
    </div>
  );
}

export default Home;
