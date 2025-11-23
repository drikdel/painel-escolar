const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken'); 

const app = express();
const PORT = 3001;
const SECRET_KEY = 'seu_segredo_super_secreto'; 


app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json());


const USERS = [
    { id: 1, username: 'aluno', password: '123' }, 
    { id: 2, username: 'prof', password: '456' }
];


app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;

    
    const user = USERS.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        
        return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    
    const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '1h' } 
    );

    
    res.json({ token, message: 'Login bem-sucedido!' });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// code by:
//      ___           ___           ___           ___           ___           ___     
//     /\__\         /\  \         /\  \         /\  \         /\__\         /\  \    
//    /::|  |       /::\  \        \:\  \       /::\  \       /:/  /        /::\  \   
//   /:|:|  |      /:/\:\  \        \:\  \     /:/\:\  \     /:/  /        /:/\ \  \  
//  /:/|:|__|__   /::\~\:\  \       /::\  \   /::\~\:\  \   /:/  /  ___   _\:\~\ \  \ 
// /:/ |::::\__\ /:/\:\ \:\__\     /:/\:\__\ /:/\:\ \:\__\ /:/__/  /\__\ /\ \:\ \ \__\
// \/__/~~/:/  / \/__\:\/:/  /    /:/  \/__/ \:\~\:\ \/__/ \:\  \ /:/  / \:\ \:\ \/__/
//       /:/  /       \::/  /    /:/  /       \:\ \:\__\    \:\  /:/  /   \:\ \:\__\  
//      /:/  /        /:/  /     \/__/         \:\ \/__/     \:\/:/  /     \:\/:/  /  
//     /:/  /        /:/  /                     \:\__\        \::/  /       \::/  /   
//     \/__/         \/__/                       \/__/         \/__/         \/__/    