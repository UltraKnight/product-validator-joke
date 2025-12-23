<template>
  <div class="container">
    <h1>✅ Produto Original</h1>

    <p class="status">Este produto é <strong>original</strong> e válido.</p>

    <p>Esta página confirma a autenticidade do produto no momento da verificação.</p>

    <div class="warning">
      <strong>⚠️ Atenção:</strong><br />
      A originalidade é válida <strong>apenas enquanto o lacre estiver intacto</strong>.<br />
      Se o lacre for violado, o produto <strong>deixa de ser considerado original</strong>.
    </div>

    <footer>
      Página oficial de confirmação de autenticidade<br />
      Acesso via QR Code
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: #222;
  max-width: 600px;
  margin: 40px auto;
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
h1 {
  color: #1a7f37;
  margin-bottom: 10px;
}
.status {
  font-size: 1.2em;
  margin: 20px 0;
  font-weight: bold;
}
.warning {
  margin-top: 25px;
  padding: 15px;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 5px;
  font-size: 0.95em;
}
footer {
  margin-top: 30px;
  font-size: 0.8em;
  color: #777;
}
</style>
