import Queue from '../lib/Queue'
export default {
    async store(req, res) {
        console.log(req.body)
        const {name, email, password} = req.body;
        const user = {
            name, email, password
        };

        await Queue.add('RegistrationMail',{user});
        await Queue.add('UserReport',{user});

       // Adiciona job mail na fila
        return res.json(user);
    }
}