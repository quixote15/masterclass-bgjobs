import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    handle({data}) {
        const {user} = data;
         Mail.sendMail({
            from: 'QUEUE TEST <queue@queuetst.com.br>',
            to: `${user.name} <${user.email}>`,
            html: `Olá ${user.name}, Bem vindo arrombado!`
        });
    }
}