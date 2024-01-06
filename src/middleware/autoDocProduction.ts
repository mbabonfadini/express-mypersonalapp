async function authDocProducao(req: any, res: any, next:any) {
    const { password } = req.body;

    if (req.headers.host.includes("localhost") || req.originalUrl !== "/doc/") {
        return next();
    }

    if (password === process.env.SWAGGER_SENHA_DOC) {
        return next()
    }

    if (password) {
        // Usuario digitou a senha errada
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
            <form method="post">
                <p style="color: red;">Senha Errada!</p>
                <label for="password">Senha da documentação:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Entrar</button>
            </form>
        `))
    } else {
        // Usuario ainda não digitou a senha e está em modo produção
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method="post">
            <label for="password">Senha da documentação:</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Entrar</button>
        </form>
        `))
    }
}

export default authDocProducao;