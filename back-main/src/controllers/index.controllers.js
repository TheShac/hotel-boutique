import {pool} from '../db.js';
import bcrypt from 'bycrypt';


export const ping = async (req,res) => {
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result)
}

// Controlador para login
export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password]);
  
      if (rows.length > 0) {
        res.json({ message: 'Inicio de sesión exitoso', user: rows[0] });
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
    } 
    catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
};

export const registerUser = async (req, res) => {
    const { email, password, role } = req.body;
  
    // Verificar que todos los datos requeridos estén presentes
    if (!email || !password || !role || !['admin', 'client'].includes(role)){
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
  
    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const [result] = await pool.query(
        'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
        [email, hashedPassword, role]
      );
      res.status(201).json({ message: 'Usuario registrado con éxito', userId: result.insertId });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al registrar el usuario' });
    }
  };



