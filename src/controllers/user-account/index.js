const Usuario = require("../../models/Users");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const verifyLogin = async (req, res) => {
   //revisar si hay errores
   const errores = validationResult(req);
   if (!errores.isEmpty()) {
     return res.status(400).json({ errores: errores.array() });
   }
 
   //extraer el usuario y el password
   const { email, password } = req.body;
 
   try {
     //revisar que sea un usuario registrado
     let usuario = await Usuario.findOne({ email });
     if (!usuario) {
       return res.status(400).json({ msg: "El usuario no existe" });
     }
 
     //revisar el password
     const passCorrecto = await bcrypt.compare(password, usuario.password);
 
     if (!passCorrecto) {
       return res.status(400).json({ msg: "La contraseña no es correcta" });
     }
 
     //crear y firmar el JWT
     const payload = {
       usuario: {
         id: usuario.id,
       },
     };
 
     //firmar el JWT
     jwt.sign(
       payload,
       process.env.BCRYPT_SECRET,
       {
         expiresIn: 36000,
       },
       (error, token) => {
         if (error) throw error;
 
         //Mensaje de confirmación
         res.json({ token });
       }
     );
   } catch (error) {
     console.log(error);
   }
 };


const createUser = async (req, res) => {
  //revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //extraer email y password
  const { email, password } = req.body;

  try {
    //revisar que el usuario registrado sea unico
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    //crear nuevo usuario
    usuario = new Usuario(req.body);
    //Hashear el password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);
    //guardar usuario
    await usuario.save();
    //crear y firmar el JWT
    const payload = {
      usuario: {
        id: usuario.id,
      },
    };
    //firmar el JWT
    jwt.sign(
      payload,
      process.env.BCRYPT_SECRET,
      {
        expiresIn: 36000,
      },
      (error, token) => {
        if (error) throw error;
        //Mensaje de confirmación
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).send("Error al instertar el nuevo Usuario");
  }
}

const authUser = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.usuario.id).select("-password");
    res.json({ usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

const modifyUser = async (req, res)=>{
  try {
        //extraer email y password
        const { name, email, password } = req.body;
        const newUser = {};

        //revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
          return res.status(400).json({ msg: "El usuario ya existe" });
        }

        //Hashear el password
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        //guardar usuario Modificado
        usuario = Usuario.findByIdAndUpdate({_id:req.params.id}, {name, email, password})


        //crear y firmar el JWT
        const payload = {
          usuario: {
          id: usuario.id,
          },
        };
        //firmar el JWT
        jwt.sign(
          payload,
          process.env.BCRYPT_SECRET,
          {
            expiresIn: 36000,
          },
          (error, token) => {
            if (error) throw error;
        //Mensaje de confirmación
            res.json({ token });
          }
        );
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
}

module.exports = {
  verifyLogin,
  createUser,
  authUser,
  modifyUser
}



