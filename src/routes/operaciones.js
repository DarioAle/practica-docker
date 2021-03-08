const router = require('express').Router()
const math = require('mathjs')

router.route('/').get((req, res) => {
  msg = "Operaciones aritméticas";
  res.json({ msg });
})

router.route('/:op').post((req, res) => {
  switch (req.params.op) {
    case "Suma":
      ans = req.body['nums'].reduce( (acc, e) => acc + e)
      break;
    case "Resta":
      ans = req.body['numToSubs']
      ans -= req.body['nums'].reduce( (acc,e) => acc + e)
      break;
    case "Multiplica":
      ans = req.body['nums'].reduce( (acc, e) => acc * e)
      break;
    case "Divide":
      ans = req.body['numToDiv']
      ans /= req.body['nums'].reduce( (acc, e) => acc * e);
      break;
    case "Free":
      ans = math.evaluate(req.body['operation'])
      break;
    default:
      ans = "Operacion no reconocida";
  }

  res.json({ respuesta : `${ans}` });
})

module.exports = router