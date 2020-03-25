import Mail from '../lib/Mail'
export default {
    async store(req, res) {
        console.log(req.body)
        const {name, email, password} = req.body;
        const user = {
            name, email, password
        };

        await Mail.sendMail({
            from: 'QUEUE TEST <queue@queuetst.com.br>',
            to: `${name} <${email}>`,
            html: `Olá ${name}, Bem vindo arrombado!`
        });
        return res.json(user);
    }
}