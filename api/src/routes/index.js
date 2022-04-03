const { Router } = require('express');
const { default: axios } = require('axios');
const API_KEY = process.env ;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const INFO_API = async ()=>{
   const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
   const MAP_DATA= await data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      weight: e.weight.metric,
      height: e.height.metric,
      life_span: e.life_span,
      temperament: e.temperament,
      imgUrl: e.image.url,
    };
  });
   return MAP_DATA;
}
router.get("/dogs",async (req,res)=>{
    
    const API_INFO = await INFO_API();
    res.send(API_INFO)
})

module.exports = router;
